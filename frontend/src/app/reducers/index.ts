import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserState, userReducer } from './user.reducer';

export interface State {
  auth: UserState;
}

export const reducers: ActionReducerMap<State> = {
  auth: userReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
