import { Action } from '@ngrx/store';
import { ScreenActionTypes, ScreenActions } from '../actions/screen.actions';
import { PictureTypes } from '../interfaces';


export const screenFeatureKey = 'screen';

export interface ScreenState {
  [PictureTypes.ProductPicture]: string;
  [PictureTypes.MainPicture]: string;
}

export const initialState: ScreenState = {
  [PictureTypes.ProductPicture]: '/',
  [PictureTypes.MainPicture]: '/',

};

export function screenReducer(state = initialState, action: ScreenActions): ScreenState {
  switch (action.type) {

    case ScreenActionTypes.ChangedScreens:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
