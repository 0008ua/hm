import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  MatRadioModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatChipsModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatChipsModule,
  ],
  exports: [
    FlexLayoutModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatChipsModule,
  ],
})

export class AppMaterialModule { }
