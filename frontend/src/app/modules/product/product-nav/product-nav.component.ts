import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material';
import { ICatalog, IProduct, ISortOrder, SortTypes } from 'src/app/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadAppNavSuccess, LoadAppProductsSuccess, LoadAppProducts } from 'src/app/actions/app.actions';
import { LoadingProducts, LoadProducts } from 'src/app/actions/product.actions';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.scss']
})
export class ProductNavComponent implements OnInit {
  sortToggle: SortTypes;
  catalog: ICatalog[];
  breadcrumb: ICatalog[];
  feedSiblings: ICatalog[];
  children: ICatalog[];
  products: IProduct[];
  navLoading: boolean;
  SortTypes = SortTypes;

  @Output() sidenavCloseEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private store: Store<State>,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    // this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    //   console.log('lang change+', event);
    // });
    this.store.select('app')
      .subscribe((store) => {
        // console.log('store', store);
        this.feedSiblings = store.nav.feedSiblings;
        this.sortToggle = store.products.sort;

        this.navLoading = store.nav.navLoading;
      });
  }

  onToggle(sort: SortTypes) {
    this.store.dispatch(new LoadingProducts({ loading: true }));
    this.store.dispatch(new LoadAppProducts({ sort, skip: 0, ProductsAction: LoadProducts }));
  }

  sidenavClose() {
    this.sidenavCloseEmitter.emit();
  }

}
