import { Action } from '@ngrx/store';
import { IProduct, ICatalog, ISortOrder, SortTypes } from '../interfaces';
import { AppActions, AppActionTypes } from '../actions/app.actions';
import { productsFeatureKey } from './product.reducer';


export const appFeatureKey = 'app';

export interface AppState {
  products: {
    currentCategory: string;
    // productsPortion: IProduct[];
    display: boolean;
    sort: SortTypes;
    skip: number;
    limit: number;
    total: number;
    // productsLoading: boolean;
  };
  nav: {
    feedSiblings: ICatalog[];
    feedChildren: ICatalog[];
    breadcrumb: ICatalog[];
    navLoading: boolean;
  };
  error: any;
}

export const initialState: AppState = {
  products: {
    currentCategory: 'products',
    // productsPortion: [],
    display: true,
    sort: SortTypes.CreatedAt,
    skip: 0,
    limit: 9,
    total: 0,
    // productsLoading: true
  },
  nav: {
    feedSiblings: [],
    feedChildren: [],
    breadcrumb: [],
    navLoading: true,
  },
  error: null,
};

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {

    case AppActionTypes.LoadAppNav: { // set loading before fires effect on tis action

      return { ...state, nav: { ...state.nav, navLoading: true } };
    }

    case AppActionTypes.LoadAppNavSuccess:

      return { ...state, nav: { ...state.nav, ...action.payload } };

    // case AppActionTypes.LoadAppProducts: { // set loading before fires effect on tis action
    //   return { ...state, products: { ...state.products, productsLoading: true} };
    // }

    case AppActionTypes.LoadAppProductsSuccess:

      return { ...state, products: { ...state.products, ...action.payload } };

    default:
      return state;
  }
}
