import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
EmpName:string='Prakhar';
Desig:string='Software Developer';
  constructor() { }

  ngOnInit(): void {
  }

}
