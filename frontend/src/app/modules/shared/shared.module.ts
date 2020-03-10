import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { ModalComponent } from './modal/modal.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [Page404Component, ModalComponent, ModalConfirmComponent, FeedbackComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    Page404Component
  ]
})
export class SharedModule { }
