import { Component, OnInit, HostListener } from '@angular/core';
import { IProduct, ICatalog } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';
import { Store, createSelector } from '@ngrx/store';
import { State, selectProductLoadingAndEntities, selectScreen } from 'src/app/reducers';
import { Router, ActivatedRoute } from '@angular/router';
import { selectEntities } from 'src/app/reducers/product.reducer';
import { LoadAppNav, LoadAppProducts } from 'src/app/actions/app.actions';
import { LoadingProducts, ProductActionTypes, LoadProducts, AddProducts } from 'src/app/actions/product.actions';
import { AppState } from 'src/app/reducers/app.reducer';
import { MediaObserver } from '@angular/flex-layout';
import { ScreenState } from 'src/app/reducers/screen.reducer';
import { map, distinctUntilChanged, takeLast, take } from 'rxjs/operators';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];
  children: ICatalog[] = [];
  loading: boolean;
  appStore: AppState;
  screenStore: ScreenState;
  currentCategory: string;
  topProgressBarActive = true;

  prevVal: any;
  constructor(
    private productService: ProductService,
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute,
    private media: MediaObserver,

  ) {
    this.route.paramMap
      .subscribe(paramMap => {
        this.currentCategory = paramMap.get('currentCategory');
        if (this.currentCategory === 'all') {
          this.currentCategory = 'products';
        }
        this.store.dispatch(new LoadAppNav({ currentCategory: this.currentCategory }));
        this.store.dispatch(new LoadingProducts({ loading: true }));
        this.store.dispatch(new LoadAppProducts({
          currentCategory: this.currentCategory,
          ProductsAction: LoadProducts,
          skip: 0 }));
      });
  }
  ngOnInit() {

    this.store.select(selectProductLoadingAndEntities)
      .subscribe((productsStore) => {
        this.compareChanges(productsStore.products);
        this.loading = productsStore.loading;
      });

    this.store.select('app')
      .subscribe((appStore) => {
        this.appStore = appStore;
      });
  }

  compareChanges(newProducts: IProduct[]) {
    let theSame = true;

    if (!this.products.length && newProducts.length) {
      this.products = newProducts;
      return;
    }

    for (let i = 0; i < this.products.length; i++) {
      if (!newProducts[i]
        || this.products[i]._id !== newProducts[i]._id
        || this.products[i].views !== newProducts[i].views) {
        theSame = false;
        break;
      }
    }

    if (theSame) {
      this.products.push(...newProducts.slice(this.products.length));
    } else {
      this.products = newProducts;
    }
  }

  // Listening of page bottom reached
  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    this.topProgressBarActive = true;
    if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 300) {
      this.topProgressBarActive = false;
      if (
        !this.loading && this.appStore.products.skip + this.appStore.products.limit < this.appStore.products.total
      ) {
        this.store.dispatch(new LoadingProducts({ loading: true }));
        this.store.dispatch(new LoadAppProducts({
          skip: this.appStore.products.skip + this.appStore.products.limit,
          ProductsAction: AddProducts,
        }));
      }
    }
  }
}
