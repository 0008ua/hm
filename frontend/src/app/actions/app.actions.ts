import { Action } from '@ngrx/store';
import { ICatalog, IProduct, ISortOrder, SortTypes } from '../interfaces';
import { ProductActionTypes, ProductActions } from './product.actions';
import { LangChangeEvent } from '@ngx-translate/core';

export enum AppActionTypes {
  LoadAppNav = '[App] Load App Nav',
  LoadAppNavSuccess = '[App] Load App Nav Success',

  LoadAppProducts = '[App] Load App Products',
  LoadAppProductsSuccess = '[App] Load App Products Success',

  LoadAppLang = '[App] Load App Lang',
  LoadAppLangSuccess = '[App] Load App Lang Success',

  LoadApp = '[App] Load App',
  LoadAppSuccess = '[App] Load App Success',
  LoadAppFailure = '[App] Load App Failure',
}

export class LoadAppNav implements Action {
  readonly type = AppActionTypes.LoadAppNav;
  constructor(public payload: { currentCategory: any }) { }
}

export class LoadAppNavSuccess implements Action {
  readonly type = AppActionTypes.LoadAppNavSuccess;
  constructor(public payload: {
    feedSiblings: ICatalog[];
    feedChildren: ICatalog[];
    breadcrumb: ICatalog[];
    navLoading: boolean;
  }) { }
}

export class LoadAppProducts implements Action {
  readonly type = AppActionTypes.LoadAppProducts;
  constructor(public payload: {
    currentCategory?: any;
    display?: boolean;
    sort?: SortTypes;
    skip?: number;
    limit?: number;
    total?: number;
    ProductsAction?: any;
  }) { }
}

export class LoadAppProductsSuccess implements Action {
  readonly type = AppActionTypes.LoadAppProductsSuccess;
  constructor(public payload: {
    currentCategory?: string,
    display?: boolean;
    sort?: SortTypes;
    skip?: number;
    limit?: number;
    total?: number;
  }) { }
}

export class LoadAppLang implements Action {
  readonly type = AppActionTypes.LoadAppLang;
  // constructor(public payload: { lang: string }) { }
}

export class LoadAppLangSuccess implements Action {
  readonly type = AppActionTypes.LoadAppLangSuccess;
  constructor(public payload: { lang: string }) { }
}

export class LoadApp implements Action {
  readonly type = AppActionTypes.LoadApp;
  constructor(public payload: { data: any }) { }
}

export class LoadAppSuccess implements Action {
  readonly type = AppActionTypes.LoadAppSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadAppFailure implements Action {
  readonly type = AppActionTypes.LoadAppFailure;
  constructor(public payload: { error: any }) { }
}

export type AppActions =
  LoadAppNav
  | LoadAppNavSuccess
  | LoadAppProducts
  | LoadAppProductsSuccess
  | LoadAppLang
  | LoadAppLangSuccess
  | LoadApp
  | LoadAppSuccess
  | LoadAppFailure;
