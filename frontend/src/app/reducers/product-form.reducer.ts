import { Action } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ProductFormActionTypes, ProductFormActions } from '../actions/product-form.actions';

export const productFormFeatureKey = 'productForm';

export interface ProductFormState {
  parent: string;
  _id: string;
  name: string;
  picture: string;
  display: boolean;
}

export const initialState: ProductFormState = {
  parent: 'products',
  _id: '',
  name: '',
  picture: environment.defaults.productPicture,
  display: true,
};

export function productFormReducer(state = initialState, action: ProductFormActions): ProductFormState {
  // console.log('product form reducer');

  switch (action.type) {
    case ProductFormActionTypes.LoadProductFormsSuccess:
      return { ...state, ...action.payload };
    case ProductFormActionTypes.LoadProductFormsFailure:
      return { ...state, ...initialState };
    case ProductFormActionTypes.ResetProductForms:
      return { ...state, ...initialState };
    case ProductFormActionTypes.AddProductForms:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
