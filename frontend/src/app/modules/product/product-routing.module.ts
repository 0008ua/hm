import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductNavComponent } from './product-nav/product-nav.component';


const routes: Routes = [
  {
    path: ':currentCategory',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductNavComponent,
      //   outlet: 'sidenav',
      },
      // {
      //   path: '',
      //   outlet: 'sidenav',
      //   redirectTo: 'all',
      //   pathMatch: 'full'
      // },
    ],
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  }

  // {
  //   path: 'all',
  //   component: ProductComponent,
  //   // pathMatch: 'full'
  // },
  // {
  //   path: 'all',
  //   component: ProductNavComponent,
  //   outlet: 'sidenav',
  //   // pathMatch: 'full'
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
