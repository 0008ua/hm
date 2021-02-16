import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './modules/shared/page404/page404.component';
import { AuthGuard } from './services/auth.guard';
import { FeedbackComponent } from './modules/shared/feedback/feedback.component';
import { PrivacyComponent } from './modules/shared/privacy/privacy.component';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
    data: { auth: 'manager' },
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
