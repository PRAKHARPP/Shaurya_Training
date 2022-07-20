import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductformComponent } from './productform/productform.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserChildComponent } from './user-child/user-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFromComponent,
    ProductListComponent,
    ProductformComponent,
    UserListComponent,
    UserChildComponent
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
