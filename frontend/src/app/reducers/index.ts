import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserState, userReducer } from './user.reducer';
import { ScreenState, screenReducer } from './screen.reducer';

export interface State {
  auth: UserState;
  screen: ScreenState;
}

export const reducers: ActionReducerMap<State> = {
  auth: userReducer,
  screen: screenReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
