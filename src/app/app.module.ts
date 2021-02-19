import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StationsComponent } from './stations/stations.component';

import { FormsModule } from '@angular/forms';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { MessagesComponent } from './messages/messages.component'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientModule,
    StationsComponent,
    StationDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
