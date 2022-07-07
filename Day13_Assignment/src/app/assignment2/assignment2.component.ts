import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
 EmpCode:string="";
 DeptName:string="";
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(EmpCode:any,DeptName:any)
  // {
  //   this.EmpCode=EmpCode;
  //   this.DeptName=DeptName;
  // }

}
