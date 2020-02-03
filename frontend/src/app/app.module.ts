import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { AppMaterialModule } from './app-material.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserEffects } from './effects/user.effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductEffects } from './effects/product.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,

    SharedModule,

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects, UserEffects, ProductEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
