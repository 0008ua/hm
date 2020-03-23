import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { MediaObserver } from '@angular/flex-layout';
import { PictureTypes, IPictureState, IUser } from '../../../interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ScreenState } from 'src/app/reducers/screen.reducer';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProductService } from 'src/app/services/product.service';
import { AppState } from 'src/app/reducers/app.reducer';
import { LoadingProducts, LoadProducts, DeleteProduct, UpdateProduct } from 'src/app/actions/product.actions';
import { LoadAppProducts } from 'src/app/actions/app.actions';
import { ModalConfirmComponent } from '../../shared/modal-confirm/modal-confirm.component';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-it',
  templateUrl: './product-it.component.html',
  styleUrls: ['./product-it.component.scss']
})
export class ProductItComponent implements OnInit {
  @Input() product: any;
  @Input() loading: boolean;

  environment = environment;
  productPicture: IPictureState;
  modalProductPicture: IPictureState;
  user: IUser;
  appStore: AppState;

  constructor(
    public media: MediaObserver,
    private userService: UserService,
    private store: Store<State>,
    private router: Router,
    public dialog: MatDialog,
    private productService: ProductService,
  ) { }

  ngOnInit() {

    this.store.select('screen')
      .subscribe((store: ScreenState) => {
        this.productPicture = store.pictureLink[PictureTypes.ProductPicture];
        this.modalProductPicture = store.pictureLink[PictureTypes.ModalProductPicture];
      });


    this.store.select('app')
      .subscribe((appStore) => {
        this.appStore = appStore;
      });
  }

  edit() {
    this.router.navigate(['/', 'dashboard', 'product-form'], { queryParams: { _id: this.product._id } });
  }

  deleteProduct() {
    const confirmObject = {
      message: `Дійсно видалити виріб: ${this.product.name || this.product._id} ?`,
      payload: this.product._id,
    };

    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      data: confirmObject,
      // panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .pipe(
        mergeMap(result => {
          if (result && result.choise) {
            return this.productService.deleteProduct(this.product._id);
          }
          return of(null);
        })
      )
      .subscribe(result => {
        if (result && result.ok === 1) {
          // reload products
          this.store.dispatch(new LoadingProducts({ loading: true }));
          this.store.dispatch(new DeleteProduct({
            id: this.product._id
          }));
          this.store.dispatch(new LoadingProducts({ loading: false }));
        }
      },
        err => console.log('error delete', this.product._id)
      );
  }

  allowTo(permittedRole: string) {
    return this.userService.allowTo(permittedRole);
  }

  openDialog(): void {
    // if (this.media.isActive('xs')) {
    //   return;
    // }

    this.productService.incViews(this.product._id)
      .subscribe(product => {
        // reload product
        this.store.dispatch(new UpdateProduct({
          product: { id: this.product._id, changes: { views: product.views } }
        }));
      },
        err => console.log('err', err)
      );

    const imageObject = {
      picture: this.modalProductPicture.link + '/' + this.product.picture,
    };

    const dialogRef = this.dialog.open(ModalComponent, {
      data: imageObject,
    });

    dialogRef.afterClosed()
      .subscribe(result => {
      },
        err => console.log('err', err)
      );
  }

}
