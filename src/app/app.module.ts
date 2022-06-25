import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TF1Component } from './tf1/tf1.component';
import { TF2Component } from './tf2/tf2.component';

@NgModule({
  declarations: [
    AppComponent,
    TF1Component,
    TF2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
