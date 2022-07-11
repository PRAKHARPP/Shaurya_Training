import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


 import { FormsModule } from '@angular/forms';
import { Assignment1NgClassComponent } from './assignment1-ng-class/assignment1-ng-class.component';
import { Assignment2NgSwitchComponent } from './assignment2-ng-switch/assignment2-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1NgClassComponent,
    Assignment2NgSwitchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
