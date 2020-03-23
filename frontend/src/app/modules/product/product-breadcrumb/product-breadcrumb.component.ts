import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { ICatalog } from '../../../interfaces';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-product-breadcrumb',
  templateUrl: './product-breadcrumb.component.html',
  styleUrls: ['./product-breadcrumb.component.scss']
})
export class ProductBreadcrumbComponent implements OnInit {

  breadcrumb: ICatalog[];
  feedChildren: ICatalog[];
  navLoading: boolean;
  lang: string;

  constructor(
    private store: Store<State>,
    public sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.store.select('app')
      .subscribe((store) => {
        this.breadcrumb = store.nav.breadcrumb;
        this.feedChildren = store.nav.feedChildren;
        this.navLoading = store.nav.navLoading;
        // subscribe on static translation language changes
        this.lang = store.lang;
      });
  }
}
