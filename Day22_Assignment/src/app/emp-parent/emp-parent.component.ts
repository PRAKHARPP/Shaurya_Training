import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-parent',
  templateUrl: './emp-parent.component.html',
  styleUrls: ['./emp-parent.component.css']
})
export class EmpParentComponent implements OnInit {
empData: any;
empData2: any=[];
selectEmpId:number=0;
show:boolean=false;
SelectedEIds:any=[];
  constructor() { }

  ngOnInit(): void {
    this.empData =[
      {eId:1, eName:"Akash",salary:56000, dept:"Marketing", post:"Manager"},
      {eId:2, eName:"Sagar",salary:50000, dept:"Sale", post:"Manager"},
      {eId:3, eName:"Pravin",salary:40000, dept:"Devloper", post:"Jr Devloper"},
      {eId:4, eName:"Mayur",salary:35000, dept:"HR", post:"Manager"},
      {eId:5, eName:"Abhijit",salary:80000, dept:"Devloper", post:" Sr-Devloper"}
    ]
  }

  onSelect(EmpRow:any)
  {
    // this.selectEmpId=selectedId;
    // this.show=!this.show;
    // this.SelectedEIds.push(selectedId);
    // console.log(this.SelectedEIds);
    this.empData2.push(EmpRow);

  }

}
