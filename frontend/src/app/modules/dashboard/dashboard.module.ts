import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
