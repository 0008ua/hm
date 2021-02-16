import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ScreenActionTypes, LoadScreens, ChangedScreens } from '../actions/screen.actions';
import { switchMap, map } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';
import { LoadApp, LoadAppProductsSuccess } from '../actions/app.actions';



@Injectable()
export class ScreenEffects {

  
  getScreens: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ScreenActionTypes.LoadScreens),
    // map((action: LoadScreens) => console.log('action', action)),
    switchMap(_ => this.sharedService.loadScreens().pipe(
      switchMap(state => [
        new ChangedScreens(state),
        new LoadAppProductsSuccess({limit: state.picturesOnPage})
      ])
    )),
  ));

  constructor(
    private actions$: Actions,
    private sharedService: SharedService,
    ) {}
}
