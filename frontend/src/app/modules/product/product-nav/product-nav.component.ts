import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ICatalog, IProduct, SortTypes } from 'src/app/interfaces';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadAppProducts } from 'src/app/actions/app.actions';
import { LoadingProducts, LoadProducts } from 'src/app/actions/product.actions';
import { SharedService } from 'src/app/services/shared.service';

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
  lang: string;

  @Output() sidenavCloseEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private store: Store<State>,
    public sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.store.select('app')
      .subscribe((store) => {
        this.feedSiblings = store.nav.feedSiblings;
        this.sortToggle = store.products.sort;
        this.navLoading = store.nav.navLoading;
        // subscribe on static translation language changes
        this.lang = store.lang;
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
