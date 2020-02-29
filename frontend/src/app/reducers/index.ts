import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserState, userReducer } from './user.reducer';
import { ProductFormState, productFormReducer } from './product-form.reducer';
import * as fromProducts from './product.reducer';
import * as fromApp from './app.reducer';
import * as fromScreen from './screen.reducer';

export interface State {
  auth: UserState;
  screen: fromScreen.ScreenState;
  productForm: ProductFormState;
  product: fromProducts.ProductState;
  app: fromApp.AppState;
}

export const reducers: ActionReducerMap<State> = {
  auth: userReducer,
  screen: fromScreen.reducer,
  productForm: productFormReducer,
  product: fromProducts.reducer,
  app: fromApp.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getProductState = createFeatureSelector<State, fromProducts.ProductState>('product');
// export const selectProductIds = createSelector(getProductState, fromProducts.selectIds);
export const selectProductEntities = createSelector(getProductState, fromProducts.selectEntities);
export const selectAllProducts = createSelector(getProductState, fromProducts.selectAll);
// export const selectTotalProducts = createSelector(getProductState, fromProducts.selectTotal);

export const selectProductLoadingAndEntities = createSelector(getProductState,
  state => ({loading: state.loading, products: fromProducts.selectAll(state)})

  // ({ loading: state.loading })
  );

export const getScreenState = createFeatureSelector<State, fromScreen.ScreenState>('screen');
export const selectScreen = createSelector(getScreenState,
  state => state.picturesOnPage
);
