import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { EmpParentComponent } from './emp-parent/emp-parent.component';
import { EmpFilterPipe } from './emp-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    EmpParentComponent,
    EmpFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
