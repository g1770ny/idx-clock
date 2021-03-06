import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { IdxClockModule } from 'idx-clock'
import {IdxClockModule} from './../../projects/idx-clock/src/public-api'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdxClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
