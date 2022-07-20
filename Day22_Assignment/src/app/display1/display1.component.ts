import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  frmUser: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.frmUser = this.formBuilder.group(
      {
        name: '',
        Roles: this.formBuilder.array([])        
      }
    )
  }

  get Roles(): FormArray {
    return this.frmUser.get("Roles") as FormArray
  }

  newRoles(): FormGroup {
    return this.formBuilder.group(
      {
        role:''
      }
    )
  }

  addRoles()
  {
    this.Roles.push(this.newRoles());
  }
  removeRole(i:number)
  {
    this.Roles.removeAt(i);
  }

  onSubmit()
  {
    console.log(this.frmUser.value);
  }

}
