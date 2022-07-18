import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormWithValidationComponent } from './reactive-form-with-validation/reactive-form-with-validation.component';

const routes: Routes = [
  {path:'display1', component: ReactiveFormWithValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
