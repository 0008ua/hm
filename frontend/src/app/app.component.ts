import { Component, OnInit } from '@angular/core';
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
import { Title, Meta } from '@angular/platform-browser';
import { combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

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
  language = 'ua';

  constructor(
    private userService: UserService,
    private store: Store<State>,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService,
  ) {
        // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ua');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ua');
   }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    console.log('lang change', event);
  });
    const $routerEvents = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        if (event.url.split('/')[1] === 'products' || event.url.split('/')[1] === '') {
          this.productsUrl = true;
        } else {
          this.productsUrl = false;
        }
    //   })
    //   );
    // $routerEvents.subscribe(_ => _);
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

    combineLatest(
      $routerEvents.pipe(mergeMap((route) => route.queryParamMap)), // query params
      $routerEvents.pipe(mergeMap((route) => route.data)) // routing.module data
    )
      .subscribe((result) => {
        const paramMap = result[0];
        const data = result[1];

        // prioryty: 1. embeded to router 2. passed as queryParams 3.default values
        const seoTitle = data.dataTitle || paramMap.get('seoTitle') || environment.seoTitle;
        const seoMeta = data.dataMeta || paramMap.get('seoMeta') || environment.seoMeta;

        this.titleService.setTitle(seoTitle);
        const tag = { name: 'description', content: seoMeta };
        const attributeSelector = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
      })


    this.store.dispatch(new GetUser());
    this.store.select('auth')
      .subscribe(store => this.user = store.user);

    this.store.dispatch(new LoadScreens());
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
    if (this.language === 'en') {
      this.translate.use('fr');
      this.language = 'fr';
    } else {
      this.translate.use('en');
      this.language = 'en';
    }
  }

}
