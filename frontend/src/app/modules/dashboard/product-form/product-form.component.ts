import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { MatSnackBar, MatRadioButton } from '@angular/material';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductFormComponent implements OnInit {
  // for form reset
  @ViewChild('f', { static: false }) formDirective: FormGroupDirective;
  // for set default 'checked' on radio button
  @ViewChild('defaultCheckedRadioButton', { static: false }) defaultCheckedRadioButton: MatRadioButton;
  // for reset file input after form reset
  @ViewChild('inputPicture', { static: false }) inputPicture: ElementRef;

  form: FormGroup;
  environment = environment;
  processingLoadPicture: boolean;
  _id: string;
  product: IProduct;

  constructor(
    private sharedService: SharedService,
    private productService: ProductService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      parents: new FormArray([
        new FormControl('toys')
      ], [
        Validators.required,
      ]),
      name: new FormControl(''),
      picture: new FormControl('', [
        Validators.required,
      ]),
      display: new FormControl(true, [
        Validators.required,
      ]),
    });

    this.productService.generateSku('toys')
      .subscribe(_id => this._id = _id,
        err => this.matSnackBar.open(err.error.message, '', { duration: 2000 }));
  }

  clearNameField() {
    this.form.get('name').setValue('');
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
        { width: 535, height: 350, crop: 'fill', fetch_format: 'auto' },
        { width: 260, height: 170, crop: 'fill', fetch_format: 'auto' },
        { width: 180, height: 180, crop: 'fill', fetch_format: 'auto' },
      ])
        .subscribe(public_id => {
          this.form.get('picture').setValue(public_id);
          this.processingLoadPicture = false;
        },
          err => this.matSnackBar.open(err.error.message, '', { duration: 2000 })
        );
    }
  }

  submitForm(): void {
    console.log('name', this.form.get('name').value);

    this.product = {
      parents: ['toys'],
      _id: this._id,
      name: this.form.get('name').value,
      picture: this.form.get('picture').value,
      display: this.form.get('display').value,
    };

    this.productService.upsertProduct(this.product)
      .subscribe(
        result => {
          console.log('res', result);
          this.matSnackBar.open('Успішно добавлено/оновлено', '', { duration: 2000 })
        } ,
        err => this.matSnackBar.open(err.error.message, '', { duration: 2000 })
      );

    // this.productService.productUpsert(this.product)
    //   .subscribe(result => {
    //     this.matSnackBar.open(result, '',
    //       { duration: 3000 });
    //     if (goBackAndReset) {
    //       this.goBack();
    //       this.resetForm();
    //       this.editMode = false;
    //     } else {
    //       this.editMode = true;
    //     }
    //   },
    //     err => this.matSnackBar.open(err.error, '',
    //       { duration: 3000, panelClass: 'snack-bar-danger' })
    //   );

  }

  resetForm() {
    // reset form and set default values
    this.formDirective.resetForm({name: '', display: true});
    // set default value to radio button
    this.defaultCheckedRadioButton.checked = true;
    // clear file input value
    this.inputPicture.nativeElement.value = [];
  }
}
