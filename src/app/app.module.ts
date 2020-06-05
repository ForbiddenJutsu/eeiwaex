import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LogedinComponent} from './logedin/logedin.component';
import {SigninComponent} from './signin/signin.component';




@NgModule({
  declarations: [
    AppComponent,
    LogedinComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
