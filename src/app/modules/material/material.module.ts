import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MAT_DATE_LOCALE
} from '@angular/material';

const material = [
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  imports: [material],
  exports: [material],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-CA' }]
})
export class MaterialModule { }
