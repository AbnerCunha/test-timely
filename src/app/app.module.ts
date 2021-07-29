import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './modules/material/material.module';

import { EventComponent } from './components/event/event.component';
import { EventGroupComponent } from './components/event-group/event-group.component';
import { DescriptionDialogComponent } from './components/description-dialog/description-dialog.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventGroupComponent,
    DescriptionDialogComponent,
    SpinnerComponent
  ],
  imports: [
    FormsModule,
    LayoutModule,
    BrowserModule,
    MaterialModule,
    ScrollingModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    DescriptionDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
