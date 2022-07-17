import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
Name:any;
ChildShow:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    if(this.ChildShow===true)
    {
      this.ChildShow=false;
    }
    else{
      this.ChildShow=true;
    }
  }

}
