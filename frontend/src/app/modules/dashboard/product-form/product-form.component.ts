import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormArray, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { MatSnackBar, MatRadioButton, MatSelectChange } from '@angular/material';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, PictureTypes, IPictureState, ICatalog } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ScreenState } from 'src/app/reducers/screen.reducer';
import { ProductFormState } from 'src/app/reducers/product-form.reducer';
import { CatalogService } from 'src/app/services/catalog.service';
import { mergeMap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { LoadProductForms, ResetProductForms } from '../../../actions/product-form.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class ProductFormComponent implements OnInit {
  // for form reset
  @ViewChild('productFormDirective', { static: false }) productFormDirective: FormGroupDirective;
  // for reset file input after form reset
  @ViewChild('inputPictureDirective', { static: false }) inputPictureDirective: ElementRef;

  environment = environment;
  productForm: FormGroup;
  processingLoadPicture: boolean;
  productPicture: IPictureState;
  state: IProduct;
  initialState: IProduct;
  children = [];

  constructor(
    private sharedService: SharedService,
    private productService: ProductService,
    private catalogService: CatalogService,
    private matSnackBar: MatSnackBar,
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
    this.productForm = new FormGroup({
      parents: new FormArray([this.initParents()]),
      _id: new FormControl('', [Validators.required]),
      name: new FormControl(''),
      picture: new FormControl('', [Validators.required]),
      display: new FormControl('', [Validators.required]),
    });

    this.store.select('productForm')
      .subscribe((store: ProductFormState) => {
        this.state = store;
        this.initWithState();
      });

    this.route.queryParamMap.subscribe(
      paramMap => {
        const _id = paramMap.get('_id');
        const parent = paramMap.get('parent');
        this.store.dispatch(new LoadProductForms({ _id, parent, product: null }));
      }
    );

    this.store.select('screen')
      .subscribe((store: ScreenState) => {
        this.productPicture = store.pictureLink[PictureTypes.ProductPicture];
      });
  }

  initWithState() {
    while (1 < (this.productForm.get('parents') as FormArray).length) {
      this.removeParents((this.productForm.get('parents') as FormArray).length - 1);
    }

    if (this.inputPictureDirective)  {
      this.inputPictureDirective.nativeElement.value = [];
    }
    if (this.productFormDirective) {
      this.productFormDirective.resetForm();
    }

    this.productForm.patchValue(
      this.state
    );
    this.spinUpParents(this.state.parent || 'products');
  }

  spinUpParents(currentParent: string) {
    if (currentParent === 'products') {
      this.catalogService.getChildren('products')
        .subscribe(
          (result: ICatalog[]) => this.children[0] = result,
          err => console.log('помилка завантаження категорій', err.error.message)
        );
    } else {
      this.catalogService.getAllParentsInclCurrentCategory(currentParent, 'products')
        .subscribe(allParents => {
          allParents.forEach((parent, level) => {
            const parentId = parent._id;

            // don't need children of last element
            if (level + 1 < allParents.length) {

              if (level !== 0) {
                // control[0] of FormArray was created at init step
                this.addParents();
                // 0 element of allParents[] is root,
                // 1 element of allParents[] is control[0] value
                (this.productForm.get('parents') as FormArray).at(level - 1).patchValue(parent._id);
              }

              this.catalogService.getChildren(parentId)
                .subscribe((children: ICatalog[]) => {
                  if (children.length) {
                    this.children[level] = children;
                  }
                },
                  err => console.log(err.error.message)
                );
            } else {
              // last element of allParents[] is control[last - 1] value
              (this.productForm.get('parents') as FormArray).at(level - 1).patchValue(parent._id);
            }
          });
        });
    }
  }

  addParents() {
    const control = this.productForm.get('parents') as FormArray;
    control.push(this.initParents());
  }

  removeParents(i: number) {
    const control = this.productForm.get('parents') as FormArray;
    control.removeAt(i);
  }

  initParents() {
    return new FormControl('', [
      Validators.required,
    ]);
  }

  onSelectCategory(event: MatSelectChange, level: number) {
    const parentId = event.value;
    while (level + 1 < (this.productForm.get('parents') as FormArray).length) {
      this.removeParents((this.productForm.get('parents') as FormArray).length - 1);
    }

    this.catalogService.getChildren(parentId)
      .subscribe((children: ICatalog[]) => {
        if (children.length) {
          this.children[level + 1] = children;
          this.addParents();
          this.productForm.get('_id').patchValue('');
        } else {
          this.productService.generateSku(parentId)
            .subscribe(sku => this.productForm.get('_id').patchValue(sku));
        }
      },
        err => console.log(err.error.message)
      );
  }

  clearNameField() {
    this.productForm.get('name').setValue('');
  }

  addPicture(event: Event) {
    this.processingLoadPicture = true;
    const file = (event.target as HTMLInputElement).files[0];
    const error = this.sharedService.checkPictureFile(file).err;

    if (error) {
      this.matSnackBar.open(error, '', { duration: 2000 });
      this.processingLoadPicture = false;
    } else {
      this.sharedService.uploadPicture(file, 'product', [
        { width: 1100, height: 825, crop: 'fill', fetch_format: 'auto' }, // popup - lg, xl
        { width: 760, height: 570, crop: 'fill', fetch_format: 'auto' }, // popp up - sm, md
        { width: 590, height: 443, crop: 'fill', fetch_format: 'auto' }, // xs
        { width: 460, height: 345, crop: 'fill', fetch_format: 'auto' }, // sm
        { width: 360, height: 270, crop: 'fill', fetch_format: 'auto' }, // lg, xl
        { width: 300, height: 225, crop: 'fill', fetch_format: 'auto' }, // md
      ])
        .subscribe(public_id => {
          this.productForm.get('picture').setValue(public_id);
          this.processingLoadPicture = false;
        },
          err => this.matSnackBar.open(err.error.message, '', { duration: 2000 })
        );
    }
  }

  submitProductForm(): void {
    const product = {
      parent: (this.productForm.get('parents') as FormArray).at((this.productForm.get('parents') as FormArray).length - 1).value,
      _id: this.productForm.get('_id').value,
      name: this.productForm.get('name').value,
      picture: this.productForm.get('picture').value,
      display: this.productForm.get('display').value,
    };
    this.productService.upsertProduct(product)
      .subscribe(
        result => {
          this.resetProductForm();
          this.matSnackBar.open('Успішно добавлено/оновлено', '', { duration: 2000 });
          this.router.navigate(['/']);
        },
        err => {
          this.store.dispatch(new LoadProductForms({ _id: null, parent: null, product }));
          this.matSnackBar.open(err.error.message, '', { duration: 2000 });
        }
      );
  }

  // reset to initial values
  resetProductForm() {
    this.store.dispatch(new ResetProductForms());
  }

  goBack() {
    this.location.back();
  }
}
