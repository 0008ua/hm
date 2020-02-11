import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ScreenActionTypes, LoadScreens, ChangedScreens } from '../actions/screen.actions';
import { switchMap, map } from 'rxjs/operators';
import { SharedService } from '../services/shared.service';



@Injectable()
export class ScreenEffects {

  @Effect()
  getUser: Observable<Action> = this.actions$.pipe(
    ofType(ScreenActionTypes.LoadScreens),
    // map((action: LoadScreens) => action.payload),
    switchMap(_ => this.sharedService.pictureLink().pipe(
      map(link => new ChangedScreens(link))
    )),
  );


  constructor(
    private actions$: Actions,
    private sharedService: SharedService,
    ) {}

}
