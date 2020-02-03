import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';



@NgModule({
  declarations: [
    ProductItemComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
