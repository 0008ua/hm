import { Action } from '@ngrx/store';
import { PictureTypes } from '../interfaces';

export enum ScreenActionTypes {
  LoadScreens = '[Screen] Load Screens',
  ChangedScreens = '[Screen] Changed Screens',
}

export class LoadScreens implements Action {
  readonly type = ScreenActionTypes.LoadScreens;
  // constructor(public payload: PictureTypes) { }
}

export class ChangedScreens implements Action {
  readonly type = ScreenActionTypes.ChangedScreens;
  constructor(public payload: any) { }
}


export type ScreenActions =
  LoadScreens |
  ChangedScreens;
