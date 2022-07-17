import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';

const routes: Routes = [
  {path:'display1', component: UserComponent},
  {path:'display2', component: ReactiveFromComponent},
  {path:'display3', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
