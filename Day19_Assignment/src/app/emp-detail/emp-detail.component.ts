import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
// @Input('propName') NameValue:any;
ChildShow:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy()
  {
    console.log("Child Compnent Destroy")
  }

}
