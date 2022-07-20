import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateDrivenFromComponent } from './template-driven-from/template-driven-from.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'display1', component:TemplateDrivenFromComponent},
  {path:'display2', component:ProductListComponent},
  {path:'display3', component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
