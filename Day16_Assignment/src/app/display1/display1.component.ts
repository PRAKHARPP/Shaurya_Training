import { Component, OnInit } from '@angular/core';
import { Disp1Data1Service } from '../disp1-data1.service';
// import { Disp1Data2Service } from '../disp1-data2.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
Result:string="";
  constructor(private data : Disp1Data1Service ) { }

  ngOnInit(): void {
    this.Result = this.data.Display1Service1();
  }

}
