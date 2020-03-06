import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ProductActions, ProductActionTypes } from '../actions/product.actions';
import { IProduct } from '../interfaces';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';

export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<IProduct> {
  // additional entities state properties
  loading: boolean;
}

export const adapter: EntityAdapter<IProduct> = createEntityAdapter<IProduct>({
  selectId: (product: IProduct) => product._id,

});

export const initialState: ProductState = adapter.getInitialState({
  // additional entity state properties
  loading: true,
});

export function reducer(
  state = initialState,
  action: ProductActions
): ProductState {
  // console.log('product reducer', action.type);

  switch (action.type) {

    case ProductActionTypes.LoadingProducts: { // listening on loading state changes
      return { ...state, loading: action.payload.loading };
    }

    // entity
    case ProductActionTypes.AddProduct: {
      return adapter.addOne(action.payload.product, state);
    }

    case ProductActionTypes.UpsertProduct: {
      return adapter.upsertOne(action.payload.product, state);
    }

    case ProductActionTypes.AddProducts: {
      return adapter.addMany(action.payload.products, state);
    }

    case ProductActionTypes.UpsertProducts: {
      return adapter.upsertMany(action.payload.products, state);
    }

    case ProductActionTypes.UpdateProduct: {
      return adapter.updateOne(action.payload.product, state);
    }

    case ProductActionTypes.UpdateProducts: {
      return adapter.updateMany(action.payload.products, state);
    }

    case ProductActionTypes.DeleteProduct: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ProductActionTypes.DeleteProducts: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ProductActionTypes.LoadProducts: {
      return adapter.addAll(action.payload.products, state);
    }

    case ProductActionTypes.ClearProducts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();


