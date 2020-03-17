import { Component, OnInit, Injector, Input, InjectionToken } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';

import { CatalogService } from '../../../services/catalog.service';
import { ICatalog, IProduct } from '../../../interfaces';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-product-breadcrumb',
  templateUrl: './product-breadcrumb.component.html',
  styleUrls: ['./product-breadcrumb.component.scss']
})
export class ProductBreadcrumbComponent implements OnInit {

  breadcrumb: ICatalog[];
  feedChildren: ICatalog[];
  navLoading: boolean;
  language: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private store: Store<State>,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.language = event.lang;
    });

    this.store.select('app')
      .subscribe((store) => {
        this.breadcrumb = store.nav.breadcrumb;
        this.feedChildren = store.nav.feedChildren;
        this.navLoading = store.nav.navLoading;
      });
    }
}
