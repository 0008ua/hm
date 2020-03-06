import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  ProductFormActionTypes, LoadProductForms,
  LoadProductFormsSuccess, LoadProductFormsFailure, AddProductForms
} from '../actions/product-form.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProductService } from '../services/product.service';



@Injectable()
export class ProductFormEffects {

  @Effect()
  loadProductForm: Observable<Action> = this.actions$.pipe(
    ofType(ProductFormActionTypes.LoadProductForms),
    map((action: LoadProductForms) => action.payload),
    switchMap(payload => {
      if (payload._id) {
        // edit existing product
        return this.productService.getProduct(payload._id)
          .pipe(
            map(product => new LoadProductFormsSuccess(product))
          );
      } else if (payload.parent) {
        // create new empty product
        return of(new AddProductForms({ parent: payload.parent }));
      } else if (payload.product) {
        // restore product from state
        return of(new LoadProductFormsSuccess(payload.product));
      } else {
        // create new empty product
        return of(new LoadProductFormsSuccess(null));
      }
    }),
    catchError(error => of(new LoadProductFormsFailure(error)))
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
  ) { }

}
