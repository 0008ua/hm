import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './modules/shared/page404/page404.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule',
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    data: { auth: 'manager' },
  },
  {
    path: 'products',
    loadChildren: './modules/product/product.module#ProductModule',
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
