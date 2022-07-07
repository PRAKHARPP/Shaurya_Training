import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { InterfaceUseComponent } from './interface-use/interface-use.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    InterfaceUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
