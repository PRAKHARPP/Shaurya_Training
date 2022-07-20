import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { EmpParentComponent } from './emp-parent/emp-parent.component';

const routes: Routes = [
  {path:'display1', component: Display1Component},
  {path:'display2', component: EmpParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
