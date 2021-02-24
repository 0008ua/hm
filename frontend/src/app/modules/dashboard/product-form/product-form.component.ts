import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormArray, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { MatRadioButton } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';
import { IProduct, PictureTypes, IPictureState, ICatalog } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ScreenState } from 'src/app/reducers/screen.reducer';
import { ProductFormState } from 'src/app/reducers/product-form.reducer';
import { CatalogService } from 'src/app/services/catalog.service';
import { mergeMap, map, filter, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { of, ReplaySubject } from 'rxjs';
import { LoadProductForms, ResetProductForms, ResetProductFormsPictureField } from '../../../actions/product-form.actions';
import 'fabric';
import { Canvas, IEvent } from 'fabric/fabric-impl';

declare const fabric: any;

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  // encapsulation: ViewEncapsulation.None
})

export class ProductFormComponent implements OnInit, AfterViewInit {
  // for form reset
  @ViewChild('productFormDirective') productFormDirective: FormGroupDirective;
  // for reset file input after form reset
  @ViewChild('inputPictureDirective') inputPictureDirective: ElementRef;

  canvas: Canvas;
  @ViewChild('fabricCanvas') canvasEl: ElementRef;

  environment = environment;
  productForm: FormGroup;
  processingLoadPicture: boolean;
  productPicture: IPictureState;
  state: IProduct;
  initialState: IProduct;
  children = [];
  image: fabric.Image;
  private initialCanvasSize = {
    width: 360,
    height: 540,
    get ratio() {
      return this.height / this.width;
    },
  };

  private workingCanvasSize = {
    width: null,
    height: null,
  };
  private workingScale = 1;

  imgUrl: string | null = null;

  private canvasPristine = true;
  canvasVisible = false;
  objectMoving$: ReplaySubject<IEvent>;
  objectScaling$: ReplaySubject<IEvent>;
  cropRect: fabric.Rect;
  outsideTop: fabric.Rect;
  outsideRight: fabric.Rect;
  outsideBottom: fabric.Rect;
  outsideLeft: fabric.Rect;

  constructor(
    private sharedService: SharedService,
    private productService: ProductService,
    private catalogService: CatalogService,
    private matSnackBar: MatSnackBar,
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private window: Window,
  ) { }

  ngAfterViewInit() {
    this.canvas = new fabric.Canvas(this.canvasEl.nativeElement, this.initialCanvasSize);

    this.objectMoving$ = new ReplaySubject(1);
    this.objectScaling$ = new ReplaySubject(1);

    this.objectScaling$
      .pipe(filter((e) => e.target === this.cropRect))
      .subscribe((e) => {
        e.target.scale(e.target.scaleX).setCoords();

        if (e.target.left < 0) {
          e.target.set('left', 0).setCoords();
        }

        if (e.target.top < 0) {
          e.target.set('top', 0).setCoords();
        }

        if (e.target.left + e.target.width * e.target.scaleX > this.canvas.getWidth() &&
          e.target.top + e.target.height * e.target.scaleY > this.canvas.getHeight()) {
          // scaling out of the right and the bottom borders
          e.target
            .set('width', this.canvas.getWidth() - e.target.left)
            .set('height', this.canvas.getHeight() - e.target.top)
            .set('scaleX', 1)
            .set('scaleY', 1)
            .setCoords();
        } else if (e.target.left + e.target.width * e.target.scaleX > this.canvas.getWidth()) {
          // scaling out of the right border
          e.target
            .set('width', this.canvas.getWidth() - e.target.left)
            .set('scaleX', 1)
            .set('scaleY', 1)
            .setCoords();
        } else if (e.target.top + e.target.height * e.target.scaleY > this.canvas.getHeight()) {
          // scaling out of the bottom border
          e.target
            .set('width', (this.canvas.getHeight() - e.target.top) / this.initialCanvasSize.ratio)
            .set('height', this.canvas.getHeight() - e.target.top)
            .set('scaleX', 1)
            .set('scaleY', 1)
            .setCoords();
        } else {
          // scaled without crossing borders
          e.target.setCoords();
        }

        // correction of ratio
        if (e.target.height / e.target.width !== this.initialCanvasSize.ratio) {
          const wRatio = this.initialCanvasSize.width / e.target.width;
          const hRatio = this.initialCanvasSize.height / e.target.height;
          const ratio = Math.min(wRatio, hRatio);

          if (e.target.width < this.canvas.getWidth() - e.target.left) {
            e.target
              .set('height', e.target.width * this.initialCanvasSize.ratio)
              .set('scaleX', 1)
              .set('scaleY', 1)
              .setCoords();
          } else if (e.target.height < this.canvas.getHeight() - e.target.top) {
            e.target
              .set('width', e.target.height / ratio)
              .set('scaleX', 1)
              .set('scaleY', 1)
              .setCoords();
          } else if (this.initialCanvasSize.ratio < 1) {
            // landscape
            const cropRectOld = e.target.getBoundingRect();
            if ((this.canvas.getWidth() - e.target.left) * this.initialCanvasSize.ratio <= this.canvas.getHeight() - e.target.top) {
              e.target
                .set('width', this.canvas.getWidth() - e.target.left)
                .set('height', (this.canvas.getWidth() - e.target.left) * this.initialCanvasSize.ratio)
                .set('scaleX', 1)
                .set('scaleY', 1)
                .setCoords();
            } else {
              e.target
                .set('width', (this.canvas.getHeight() - cropRectOld.top) / this.initialCanvasSize.ratio)
                .set('height', this.canvas.getHeight() - cropRectOld.top)
                .set('scaleX', 1)
                .set('scaleY', 1)
                .setCoords();
            }
          } else if (this.initialCanvasSize.ratio >= 1) {
            // portrait
            e.target
              .set('width', (this.canvas.getHeight() - e.target.top) / this.initialCanvasSize.ratio)
              .set('height', this.canvas.getHeight() - e.target.top)
              .set('scaleX', 1)
              .set('scaleY', 1)
              .setCoords();
          } else {
            // scaled without crossing borders
            e.target.setCoords();
          }
        }

        e.target.setCoords();

        this.canvas.renderAll();
        // this.canvas.requestRenderAll();
      });

    this.objectMoving$
      .pipe(filter((e) => e.target === this.cropRect))
      .subscribe((e) => {
        console.log('e.target', e.target);
        const cropRectOld = e.target.getBoundingRect();

        if (e.target.left < 0) {
          e.target.set('left', 0).setCoords();
        }

        if (e.target.top < 0) {
          e.target.set('top', 0).setCoords();
        }

        if (e.target.left + e.target.width * e.target.scaleX > this.canvas.getWidth() &&
          e.target.top + e.target.height * e.target.scaleY > this.canvas.getHeight()) {
          // moving out of the right and the bottom borders
          e.target
            .set('left', cropRectOld.left)
            .set('top', cropRectOld.top)
            .setCoords();
        } else if (e.target.left + e.target.width * e.target.scaleX > this.canvas.getWidth()) {
          // moving out of the right border
          e.target
            .set('left', cropRectOld.left)
            .setCoords();
        } else if (e.target.top + e.target.height * e.target.scaleY > this.canvas.getHeight()) {
          // moving out of the bottom border
          e.target
            .set('top', cropRectOld.top)
            .setCoords();
        } else {
          // object wasn't moved out of the border
          e.target.setCoords();
        }
        e.target.setCoords();

        this.canvas.renderAll();

      });

    // fabric.Image.fromURL('./assets/cell.png',
    //   (oImg: fabric.Image) => {
    //     this.canvas.add(oImg);
    //   });
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      parents: new FormArray([this.initParents()]),
      _id: new FormControl('', [Validators.required]),
      name: new FormControl(''),
      description: new FormControl(''),
      picture: new FormControl('', [Validators.required]),
      display: new FormControl('', [Validators.required]),
    });

    this.store.select('productForm')
      .subscribe((store: ProductFormState) => {
        this.state = store;
        this.initWithState();
      });

    this.route.queryParamMap.subscribe(
      (paramMap) => {
        const _id = paramMap.get('_id');
        const parent = paramMap.get('parent');
        this.store.dispatch(new LoadProductForms({ _id, parent, product: null }));
      },
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

    if (this.inputPictureDirective) {
      this.inputPictureDirective.nativeElement.value = [];
    }
    if (this.productFormDirective) {
      this.productFormDirective.resetForm();
    }

    this.productForm.patchValue(
      this.state,
    );
    this.spinUpParents(this.state.parent || 'products');
  }

  spinUpParents(currentParent: string) {
    if (currentParent === 'products') {
      this.catalogService.getChildren('products')
        .subscribe(
          (result: ICatalog[]) => this.children[0] = result,
          (err) => console.log('помилка завантаження категорій', err.error.message),
        );
    } else {
      this.catalogService.getAllParentsInclCurrentCategory(currentParent, 'products')
        .subscribe((allParents) => {
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
                  (err) => console.log(err.error.message),
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
            .subscribe((sku) => this.productForm.get('_id').patchValue(sku));
        }
      },
        (err) => console.log(err.error.message),
      );
  }

  clearField(fieldName: string) {
    this.productForm.get(fieldName).setValue('');
  }

  // choose file event
  addPicture(event: Event) {
    if (!this.canvasPristine) {
      this.resetCanvasSize();
    }

    const file = (event.target as HTMLInputElement).files[0];
    if (!file) {
      return;
    }
    this.processingLoadPicture = true;
    this.canvasVisible = true;

    // check file size and dimension
    const error = this.sharedService.checkPictureFile(file).err;
    if (error) {
      this.matSnackBar.open(error, '', { duration: 2000 });
      this.processingLoadPicture = false;
      this.canvasVisible = false;
    } else {
      const fr = new FileReader();

      /**
       *  add listener on file readed
       */
      fr.onload = () => {
        this.processingLoadPicture = false;

        const src = fr.result as string;

        fabric.Image.fromURL(src,
          (oImg: fabric.Image) => {
            if (this.canvasPristine) {
              this.canvasPristine = false;

              const imgRatio = oImg.height / oImg.width;
              if (imgRatio >= 1.5) {
                // portrait v1
                this.workingScale = this.initialCanvasSize.width / oImg.width;
                this.workingCanvasSize = {
                  width: this.initialCanvasSize.width,
                  height: this.initialCanvasSize.width * imgRatio,
                };
                this.cropRect = new fabric.Rect({
                  width: this.initialCanvasSize.width,
                  height: this.initialCanvasSize.height,
                  left: 0,
                  top: (this.workingCanvasSize.height - this.initialCanvasSize.height) / 2,
                  // top: (oImg.height - oImg.width * this.initialCanvasSize.ratio) / 2,
                  fill: 'white',
                  opacity: .4,
                  strokeWidth: 0,
                  transparentCorners: false,
                  cornerSize: 10,
                  cornerStyle: 'circle',
                  lockRotation: true,
                  cornerColor: 'rgba(102,153,255,0.8)',
                  objectCaching: true,
                }).setControlsVisibility({
                  'mtr': false,
                  'mt': false,
                  'mr': false,
                  'ml': false,
                  'mb': false,
                });

              } else if (imgRatio < 1.5 && imgRatio >= 1) {
                // portrait v2
                this.workingScale = this.initialCanvasSize.height / oImg.height;
                this.workingCanvasSize = {
                  width: oImg.width * this.workingScale,
                  height: this.initialCanvasSize.height
                };
                this.cropRect = new fabric.Rect({
                  width: this.initialCanvasSize.width,
                  height: this.initialCanvasSize.height,
                  left: (this.workingCanvasSize.width - this.initialCanvasSize.width) / 2,
                  top: 0,
                  fill: 'white',
                  opacity: .4,
                  strokeWidth: 0,
                  transparentCorners: false,
                  cornerSize: 10,
                  cornerStyle: 'circle',
                  lockRotation: true,
                  cornerColor: 'rgba(102,153,255,0.8)',
                  objectCaching: true,
                }).setControlsVisibility({
                  'mtr': false,
                  'mt': false,
                  'mr': false,
                  'ml': false,
                  'mb': false,
                });
              }

              else {
                // landscape
                this.workingScale = this.initialCanvasSize.height / oImg.height;
                this.workingCanvasSize = {
                  width: this.initialCanvasSize.width / imgRatio,
                  height: this.initialCanvasSize.height,
                };
                this.cropRect = new fabric.Rect({
                  width: this.initialCanvasSize.width,
                  height: this.initialCanvasSize.height,
                  left: (this.workingCanvasSize.width - this.initialCanvasSize.width) / 2,
                  top: 0,
                  fill: 'white',
                  opacity: .4,
                  strokeWidth: 0,
                  transparentCorners: false,
                  cornerSize: 10,
                  cornerStyle: 'circle',
                  lockRotation: true,
                  cornerColor: 'rgba(102,153,255,0.8)',
                  objectCaching: true,
                }).setControlsVisibility({
                  'mtr': false,
                  'mt': false,
                  'mr': false,
                  'ml': false,
                  'mb': false,
                });
              }
              this.canvas.setDimensions({
                width: this.workingCanvasSize.width,
                height: this.workingCanvasSize.height
              });
            }
            this.image = oImg;
            this.image.set('strokeWidth', 0);
            this.image.set('selectable', false);
            this.image.set('hasControls', false);
            this.image.scale(this.workingScale);

            this.canvas.add(this.image);
            this.canvas.add(this.cropRect);
            this.canvas.requestRenderAll();
            this.canvas.setActiveObject(this.cropRect);
            this.canvas.on('object:moving', (e) => this.objectMoving$.next(e));
            this.canvas.on('object:moved', (e) => {
              this.cropRect.setCoords();
              this.canvas.requestRenderAll();
            });
            this.canvas.on('object:scaled', (e) => {
              this.cropRect.setCoords();
              this.canvas.requestRenderAll();
            });
            this.canvas.on('object:scaling', (e) => this.objectScaling$.next(e));
            // 'object:rotating': (e) => this.mouseMoving$.next(e),
            console.log('objects', this.canvas.getObjects());

          }, {
          top: 0,
          // objectCaching: true,
        });
      };
      // read file
      fr.readAsDataURL(file);
    }
  }

  resetCanvasSize() {
    this.canvasPristine = true;
    this.canvas.clear();
    // this.canvas.setDimensions(this.initialCanvasSize, { backstoreOnly: true });
    this.canvas.setDimensions({
      width: this.initialCanvasSize.width + 'px',
      height: this.initialCanvasSize.height + 'px',
    }, { cssOnly: true });
    this.canvasVisible = false;
    this.store.dispatch(new ResetProductFormsPictureField());
    this.imgUrl = null;
  }

  uploadPicture() {
    this.processingLoadPicture = true;
    this.canvasVisible = false;

    // // hide all controls
    // this.canvas.getObjects().map((obj) => {
    //   obj.hasControls = false;
    // });
    // this.canvas.renderAll();

    // this.canvas.setDimensions({
    //   width: this.cropRect.width * this.cropRect.scaleX / this.workingScale,
    //   height: this.cropRect.height * this.cropRect.scaleY / this.workingScale,
    // }, { backstoreOnly: true });

    // this.canvas.setDimensions({
    //   width: this.cropRect.width * this.cropRect.scaleX + 'px',
    //   height: this.cropRect.height * this.cropRect.scaleY + 'px',
    // }, { cssOnly: true });

    // this.image
    //   .set('left', -this.cropRect.left )
    //   .set('top', -this.cropRect.top)
    //   .set('width', this.cropRect.width / this.workingScale)
    //   .set('height', this.cropRect.height / this.workingScale)
    //   .setCoords();
    // this.image.scale(1);

    // const cropOptions = {
    //   left: Math.floor(-this.cropRect.left),
    //   top: Math.floor(-this.cropRect.top),
    //   width: Math.floor(this.cropRect.width * this.workingScale),
    //   height: Math.floor(this.cropRect.height * this.workingScale)
    // }

    const cropOptions = {
      left: Math.floor(this.cropRect.left / this.workingScale),
      top: Math.floor(this.cropRect.top / this.workingScale),
      width: Math.floor(this.cropRect.width * this.cropRect.scaleX / this.workingScale),
      height: Math.floor(this.cropRect.height * this.cropRect.scaleY / this.workingScale),
      // enableRetinaScaling: true,
    }

    // this.canvas.remove(this.cropRect);
    this.imgUrl = this.image.set({
      scaleX: 1,
      scaleY: 1,
    }).toDataURL(cropOptions);
    console.log('this.imgUrl', this.imgUrl);
    const tmpCanvas = this.image.set({
      scaleX: 1,
      scaleY: 1,
    }).toCanvasElement(cropOptions);

    tmpCanvas.toBlob((blob) => {
      const file = new File([blob], 'img.png', { type: 'image/png' });
      const error = this.sharedService.checkPictureFile(file).err;
      if (error) {
        this.matSnackBar.open(error, '', { duration: 2000 });
        this.processingLoadPicture = false;
      } else {
        // this.sharedService.uploadPicture(file, 'product', [
        //   { width: 1100, height: 825, crop: 'fill', fetch_format: 'auto' }, // popup - lg, xl
        //   { width: 760, height: 570, crop: 'fill', fetch_format: 'auto' }, // popp up - sm, md
        //   { width: 590, height: 443, crop: 'fill', fetch_format: 'auto' }, // xs
        //   { width: 460, height: 345, crop: 'fill', fetch_format: 'auto' }, // sm
        //   { width: 360, height: 270, crop: 'fill', fetch_format: 'auto' }, // lg, xl
        //   { width: 300, height: 225, crop: 'fill', fetch_format: 'auto' }, // md
        // ])
        this.sharedService.uploadPicture(file, 'product', [
          { width: 1100, height: 1650, crop: 'fill', fetch_format: 'auto' }, // popup - lg, xl
          { width: 760, height: 1140, crop: 'fill', fetch_format: 'auto' }, // popp up - sm, md
          { width: 590, height: 885, crop: 'fill', fetch_format: 'auto' }, // xs
          { width: 460, height: 690, crop: 'fill', fetch_format: 'auto' }, // sm
          { width: 360, height: 540, crop: 'fill', fetch_format: 'auto' }, // lg, xl
          { width: 300, height: 250, crop: 'fill', fetch_format: 'auto' }, // md
        ])
          .subscribe((public_id) => {
            this.productForm.get('picture').setValue(public_id);
            this.processingLoadPicture = false;
            this.canvasVisible = false;
            this.imgUrl = null;
            this.productForm.get('picture').markAsDirty();
          },
            (err) => this.matSnackBar.open(err.error.message, '', { duration: 2000 }),
          );
      }
    }, 'image/png');

    //     this.canvas.getObjects().map((x) => {
    // console.log('x', x);
    //        x.scale(1);
    //     })
    // this.canvas.renderAll();
    // this.imgUrl = this.canvas.toDataURL({ format: 'image/png'});

    // this.canvasEl.nativeElement.toBlob((blob) => {
    //   const file = new File([blob], 'img.png', { type: 'image/png' });
    //   const error = this.sharedService.checkPictureFile(file).err;
    //   if (error) {
    //     this.matSnackBar.open(error, '', { duration: 2000 });
    //     this.processingLoadPicture = false;
    //   } else {
    //     this.sharedService.uploadPicture(file, 'product', [
    //       { width: 1100, height: 825, crop: 'fill', fetch_format: 'auto' }, // popup - lg, xl
    //       { width: 760, height: 570, crop: 'fill', fetch_format: 'auto' }, // popp up - sm, md
    //       { width: 590, height: 443, crop: 'fill', fetch_format: 'auto' }, // xs
    //       { width: 460, height: 345, crop: 'fill', fetch_format: 'auto' }, // sm
    //       { width: 360, height: 270, crop: 'fill', fetch_format: 'auto' }, // lg, xl
    //       { width: 300, height: 225, crop: 'fill', fetch_format: 'auto' }, // md
    //     ])
    //       .subscribe((public_id) => {
    //         this.productForm.get('picture').setValue(public_id);
    //         this.processingLoadPicture = false;
    //         this.canvasVisible = false;
    //         this.productForm.get('picture').markAsDirty();
    //       },
    //         (err) => this.matSnackBar.open(err.error.message, '', { duration: 2000 }),
    //       );
    //   }
    // }, { type: 'image/png' });
  }

  // addPicture(event: Event) {
  //   this.processingLoadPicture = true;
  //   const file = (event.target as HTMLInputElement).files[0];
  //   const error = this.sharedService.checkPictureFile(file).err;

  //   if (error) {
  //     this.matSnackBar.open(error, '', { duration: 2000 });
  //     this.processingLoadPicture = false;
  //   } else {
  //     this.sharedService.uploadPicture(file, 'product', [
  //       { width: 1100, height: 825, crop: 'fill', fetch_format: 'auto' }, // popup - lg, xl
  //       { width: 760, height: 570, crop: 'fill', fetch_format: 'auto' }, // popp up - sm, md
  //       { width: 590, height: 443, crop: 'fill', fetch_format: 'auto' }, // xs
  //       { width: 460, height: 345, crop: 'fill', fetch_format: 'auto' }, // sm
  //       { width: 360, height: 270, crop: 'fill', fetch_format: 'auto' }, // lg, xl
  //       { width: 300, height: 225, crop: 'fill', fetch_format: 'auto' }, // md
  //     ])
  //       .subscribe(public_id => {
  //         this.productForm.get('picture').setValue(public_id);
  //         this.processingLoadPicture = false;
  //         this.productForm.get('picture').markAsDirty();
  //       },
  //         err => this.matSnackBar.open(err.error.message, '', { duration: 2000 })
  //       );
  //   }
  // }

  submitProductForm(): void {
    const product = {
      parent: (this.productForm.get('parents') as FormArray).at((this.productForm.get('parents') as FormArray).length - 1).value,
      _id: this.productForm.get('_id').value,
      name: this.productForm.get('name').value,
      description: this.productForm.get('description').value,
      picture: this.productForm.get('picture').value,
      display: this.productForm.get('display').value,
    };
    console.log('product', product);
    this.productService.upsertProduct(product)
      .subscribe(
        (result) => {
          this.resetProductForm();
          this.matSnackBar.open('Успішно добавлено/оновлено', '', { duration: 2000 });
          this.router.navigate(['/']);
        },
        (err) => {
          this.store.dispatch(new LoadProductForms({ _id: null, parent: null, product }));
          this.matSnackBar.open(err.error.message, '', { duration: 2000 });
        },
      );
  }

  // reset to initial values
  resetProductForm() {
    this.store.dispatch(new ResetProductForms());
    this.resetCanvasSize();
  }

  goBack() {
    this.location.back();
  }
}
