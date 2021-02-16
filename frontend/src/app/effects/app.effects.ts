import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, catchError, mergeMap, withLatestFrom, filter, tap } from 'rxjs/operators';

import { AppActionTypes, LoadAppNav, LoadAppNavSuccess, LoadAppProducts, LoadAppFailure, LoadAppProductsSuccess, LoadAppLangSuccess } from '../actions/app.actions';

import { ICatalog, IProduct } from '../interfaces';

import { CatalogService } from '../services/catalog.service';
import { DbService } from '../services/db.service';
import { LoadProducts, LoadingProducts } from '../actions/product.actions';
import { AppState } from '../reducers/app.reducer';
import { State } from '../reducers';
import { environment } from '../../environments/environment';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';


@Injectable()
export class AppEffects {
  children: ICatalog[];
  environment = environment;

  loadNav: Observable<Action> = createEffect(() => this.actions$
      .pipe(
          ofType(AppActionTypes.LoadAppNav),
          map((action: LoadAppNav) => action.payload),
          switchMap((payload: { currentCategory: string }) =>
            combineLatest([
              this.catalogService.getAllParentsInclCurrentCategory(payload.currentCategory, 'products'),
              // delete unneeded root categorie
              this.catalogService.getAllSiblingsOfCurrentCategory(payload.currentCategory === 'products' ? null : payload.currentCategory),
              this.catalogService.getChildren(payload.currentCategory),
            ]),
          ),
          map((data) => new LoadAppNavSuccess({
            breadcrumb: data[0].slice(1), // delete unneeded root categorie
            feedSiblings: data[1],
            feedChildren: data[2],
            navLoading: false,
          })),
          catchError((error) => of(new LoadAppFailure(error))),
      ));


  getProducts: Observable<Action> = createEffect(() => this.actions$.pipe(
      ofType(AppActionTypes.LoadAppProducts),
      withLatestFrom(this.store$),
      map((actionAndStoreState) => {
        const combinedStoreWithPayload = {
          ...actionAndStoreState[1].app.products, // previous state
          // limit: actionAndStoreState[1].screen.picturesOnPage, // set limit (pictures portion) according to screen size
          ...(actionAndStoreState[0] as LoadAppProducts).payload, // replace current values with incoming payload
        };
        return combinedStoreWithPayload;
      }),
      switchMap((combinedStoreWithPayload) => {
        return this.catalogService.getChildren(combinedStoreWithPayload.currentCategory)
            .pipe(
                switchMap((children: ICatalog[]) => {
                  if (combinedStoreWithPayload.currentCategory === 'products') {
                    // if root
                    return this.dbService.allItems('products',
                        combinedStoreWithPayload.display,
                        this.environment.sortQueries[combinedStoreWithPayload.sort],
                        combinedStoreWithPayload.skip,
                        combinedStoreWithPayload.limit,
                    );
                  } else if (!children.length) {
                    // if no children - show items
                    this.children = [];
                    return this.dbService.itemsByParents('products',
                        [combinedStoreWithPayload.currentCategory],
                        combinedStoreWithPayload.display,
                        this.environment.sortQueries[combinedStoreWithPayload.sort],
                        combinedStoreWithPayload.skip,
                        combinedStoreWithPayload.limit,
                    );
                  } else {
                    // show children (for menu) and all of every child items
                    this.children = children;
                    const childrenIds = children.map((item) => item._id);
                    return this.dbService.itemsByParents('products',
                        childrenIds,
                        combinedStoreWithPayload.display,
                        this.environment.sortQueries[combinedStoreWithPayload.sort],
                        combinedStoreWithPayload.skip,
                        combinedStoreWithPayload.limit,
                    );
                  }
                }),
                mergeMap((response: { items: IProduct[], total: number }) => {
                  const products = response.items;
                  const { total } = response;
                  const IncomingProductsAction = combinedStoreWithPayload.ProductsAction;
                  return [
                    new LoadAppProductsSuccess({
                      currentCategory: combinedStoreWithPayload.currentCategory,
                      display: combinedStoreWithPayload.display,
                      sort: combinedStoreWithPayload.sort,
                      skip: combinedStoreWithPayload.skip,
                      limit: combinedStoreWithPayload.limit,
                      total,
                    }),
                    new IncomingProductsAction({ products }),
                    new LoadingProducts({ loading: false }),
                  ];
                }),
            );
      }),
      catchError((error) => of(new LoadAppFailure(error))),
  ));


  // @Effect()
  // setLang: Observable<Action> = this.actions$
  //   .pipe(
  //     ofType(AppActionTypes.SetAppLang),
  //     // map((action: LoadAppNav) => action.payload),
  //     switchMap(lang => this.translate.use(lang)),
  //     map((event: LangChangeEvent) => new LoadAppLangSuccess({
  //       lang: event.lang,
  //     })),
  //     catchError(error => of(new LoadAppFailure(error)))
  //   );


  loadLang: Observable<Action> = createEffect(() => this.actions$
      .pipe(
          ofType(AppActionTypes.LoadAppLang),
          // map((action: LoadAppNav) => action.payload),
          switchMap((_) => this.translate.onLangChange),
          map((event: LangChangeEvent) => new LoadAppLangSuccess({
            lang: event.lang,
          })),
          catchError((error) => of(new LoadAppFailure(error))),
      ));

  constructor(
    private actions$: Actions,
    private store$: Store<State>,
    private catalogService: CatalogService,
    private dbService: DbService,
    private translate: TranslateService,
  ) { }
}
