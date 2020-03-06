import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { ModalComponent } from './modal/modal.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';



@NgModule({
  declarations: [Page404Component, ModalComponent, ModalConfirmComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    Page404Component
  ]
})
export class SharedModule { }
