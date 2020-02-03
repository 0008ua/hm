import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCardModule,
  // MatInputModule, , MatBadgeModule
  // MatGridListModule, MatSnackBarModule, MatTabsModule,
  // MatDialogModule, MatTableModule, MatProgressSpinnerModule, MatStepperModule,
  // MatRadioModule, MatSelectModule,  MatCheckboxModule, MatMenuModule,
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
  ],
  exports: [
    FlexLayoutModule,

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
  ],
})

export class AppMaterialModule { }
