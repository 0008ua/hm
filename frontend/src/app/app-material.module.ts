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
  // MatBadgeModule
  // MatGridListModule, MatTabsModule,
  // MatDialogModule, MatTableModule, MatStepperModule,
  // MatSelectModule,  MatCheckboxModule, MatMenuModule,
  // MatExpansionModule, MatListModule, MatAutocompleteModule, MatDividerModule,
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
  ],
})

export class AppMaterialModule { }
