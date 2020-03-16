import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ProductNavComponent } from './product-nav/product-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductBreadcrumbComponent } from './product-breadcrumb/product-breadcrumb.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductComponent,
    ProductNavComponent,
    ProductBreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    ProductRoutingModule,
    TranslateModule.forChild({
      extend: true,
    })
  ],
  exports: [
    ProductNavComponent,

  ]
})
export class ProductModule { }
