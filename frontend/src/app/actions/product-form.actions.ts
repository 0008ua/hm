import { Action } from '@ngrx/store';
import { IProduct } from '../interfaces';

export enum ProductFormActionTypes {
  LoadProductForms = '[ProductForm] Load ProductForms',
  LoadProductFormsSuccess = '[ProductForm] Load ProductForms Success',
  LoadProductFormsFailure = '[ProductForm] Load ProductForms Failure',
  ResetProductForms = '[ProductForm] Reset ProductForms',
  ResetProductFormsPictureField = '[ProductForm] Reset ProductForms Picture Field',
  AddProductForms = '[ProductForm] Add ProductForms',
}

export class LoadProductForms implements Action {
  readonly type = ProductFormActionTypes.LoadProductForms;
  constructor(public payload: { _id: string | null, parent: string | null, product: IProduct }) { }
}

export class LoadProductFormsSuccess implements Action {
  readonly type = ProductFormActionTypes.LoadProductFormsSuccess;
  constructor(public payload: IProduct) { }
}

export class LoadProductFormsFailure implements Action {
  readonly type = ProductFormActionTypes.LoadProductFormsFailure;
  constructor(public payload: any) { }
}

export class AddProductForms implements Action {
  readonly type = ProductFormActionTypes.AddProductForms;
  constructor(public payload: { parent: string | null }) { }
}

export class ResetProductForms implements Action {
  readonly type = ProductFormActionTypes.ResetProductForms;
}

export class ResetProductFormsPictureField implements Action {
  readonly type = ProductFormActionTypes.ResetProductFormsPictureField;
}

export type ProductFormActions =
  LoadProductForms |
  LoadProductFormsSuccess |
  LoadProductFormsFailure |
  AddProductForms |
  ResetProductForms |
  ResetProductFormsPictureField;
