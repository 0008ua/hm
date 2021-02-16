import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CatalogService } from '../services/catalog.service';
import { DbService } from '../services/db.service';




@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
  ) { }

}
