import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { ModalComponent } from './modal/modal.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    Page404Component,
    ModalComponent,
    ModalConfirmComponent,
    FeedbackComponent,
    PrivacyComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    TranslateModule.forChild({
      extend: true,
    })
  ],
  exports: [
    Page404Component,
    // PrivacyComponent,
  ]
})
export class SharedModule { }
