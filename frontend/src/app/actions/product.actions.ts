import { Action, union } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IProduct } from '../interfaces';

export enum ProductActionTypes {
  GetProducts = '[Product] Get Products',
  LoadingProducts = '[Product] Loading Products',
  LoadProducts = '[Product] Load Products',
  LoadProductsFailure = '[ProductForm] Load Products Failure',
  AddProduct = '[Product] Add Product',
  UpsertProduct = '[Product] Upsert Product',
  AddProducts = '[Product] Add Products',
  UpsertProducts = '[Product] Upsert Products',
  UpdateProduct = '[Product] Update Product',
  UpdateProducts = '[Product] Update Products',
  DeleteProduct = '[Product] Delete Product',
  DeleteProducts = '[Product] Delete Products',
  ClearProducts = '[Product] Clear Products'
}

// get products from db
// export class GetProducts implements Action {
//   readonly type = ProductActionTypes.GetProducts;

//   constructor(public payload: {
//     currentCategory: string;
//     display: boolean;
//     sort: string;
//     skip: number;
//     limit: number;
//   }) { }
// }

// set or cancel loading status
export class LoadingProducts implements Action {
  readonly type = ProductActionTypes.LoadingProducts;

  constructor(public payload: { loading: boolean }) { }
}


// entities
export class LoadProducts implements Action {
  readonly type = ProductActionTypes.LoadProducts;

  constructor(public payload: { products: IProduct[] }) { }
}

export class LoadProductsFailure implements Action {
  readonly type = ProductActionTypes.LoadProductsFailure;

  constructor(public payload: any) { }
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.AddProduct;

  constructor(public payload: { product: IProduct }) { }
}

export class UpsertProduct implements Action {
  readonly type = ProductActionTypes.UpsertProduct;

  constructor(public payload: { product: IProduct }) { }
}

export class AddProducts implements Action {
  readonly type = ProductActionTypes.AddProducts;

  constructor(public payload: { products: IProduct[] }) { }
}

export class UpsertProducts implements Action {
  readonly type = ProductActionTypes.UpsertProducts;

  constructor(public payload: { products: IProduct[] }) { }
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: { product: Update<IProduct> }) { }
}

export class UpdateProducts implements Action {
  readonly type = ProductActionTypes.UpdateProducts;

  constructor(public payload: { products: Update<IProduct>[] }) { }
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: { id: string }) { }
}

export class DeleteProducts implements Action {
  readonly type = ProductActionTypes.DeleteProducts;

  constructor(public payload: { ids: string[] }) { }
}

export class ClearProducts implements Action {
  readonly type = ProductActionTypes.ClearProducts;
}



export type ProductActions =
  | LoadingProducts
  | LoadProducts
  | LoadProductsFailure
  | AddProduct
  | UpsertProduct
  | AddProducts
  | UpsertProducts
  | UpdateProduct
  | UpdateProducts
  | DeleteProduct
  | DeleteProducts
  | ClearProducts;
