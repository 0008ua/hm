import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { UserService } from './services/user.service';
import { IUser, PictureTypes } from './interfaces';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { GetUser } from './actions/user.actions';
import { FbService } from './services/fb.service';
import { LoadScreens } from './actions/screen.actions';
import { ScreenState } from './reducers/screen.reducer';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import { combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LoadAppLangSuccess, LoadAppLang } from './actions/app.actions';
import { SharedService } from './services/shared.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: IUser;
  link: any;
  productsUrl: boolean;
  environment = environment;
  language = 'uk';


  constructor(
    private userService: UserService,
    private sharedService: SharedService,
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    // static translation initialization
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('uk');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    const browserLang = translate.getBrowserLang();
    this.language = browserLang.match(/uk|ru/) ? 'uk' : 'en';
    translate.use(this.language);

    // set to store static translation language
    this.store.dispatch(new LoadAppLang());
  }

  ngOnInit() {
    this.store.dispatch(new GetUser());
    this.store.select('auth')
      .subscribe(store => this.user = store.user);

    this.store.dispatch(new LoadScreens());

    this.store.select('app')
      .subscribe(store => this.language = store.lang);

    const routerEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        if (event.url.split('/')[1] === 'products' || event.url.split('/')[1] === '') {
          this.productsUrl = true;
        } else {
          this.productsUrl = false;
        }
        gtag('config', 'UA-151728431-1',
          {
            page_path: event.urlAfterRedirects
          }
        );
      }),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'));

    const store$ = this.store.select('app');

    combineLatest(
      routerEvents$.pipe(mergeMap((route) => route.queryParamMap)), // query params
      routerEvents$.pipe(mergeMap((route) => route.data)), // routing.module data
      store$.pipe(map(appStore => appStore.lang)) // fires on lang changed
    )
      .subscribe((result) => {
        const paramMap = result[0];
        const data = result[1];
        const currentLanguage = result[2];
        this.renderer.setAttribute(document.querySelector('html'), 'lang', currentLanguage);

        // prioryty: 1. embeded to router 2. passed as queryParams 3.default values
        const seoTitle = data.dataTitle || paramMap.get('seoTitle')
        || environment[this.sharedService.createLangField('seoTitle')];

        const seoMeta = data.dataMeta || paramMap.get(this.sharedService.createLangField('seoMeta'))
        || environment[this.sharedService.createLangField('seoMeta')];

        this.titleService.setTitle(seoTitle);
        const tag = { name: 'description', content: seoMeta };
        const attributeSelector = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
      });
  }


  allowTo(permittedRole: string) {
    return this.userService.allowTo(permittedRole);
  }

  restrictTo(restrictedRoles: string[]) {
    return this.userService.restrictTo(restrictedRoles);
  }

  logout() {
    this.userService.logout().subscribe(_ => this.router.navigate(['/']));
  }

  switchLanguage(event?) {
    if (event) {
      event.stopPropagation();
    }
    this.language === 'en' ? this.language = 'uk' : this.language = 'en';
    this.translate.use(this.language);
  }

}
