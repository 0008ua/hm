import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';


const routes: Routes = [
  {
    path: ':currentCategory',
    component: ProductComponent,
  },
  {
    path: 'all',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
