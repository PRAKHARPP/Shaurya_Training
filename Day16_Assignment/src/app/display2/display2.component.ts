import { Component, OnInit } from '@angular/core';
import { MsgDisplayService } from '../msg-display.service';
// import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor(private service1 : MsgDisplayService) { }

  ngOnInit(): void {

    const Result1 = this.service1.DisplayMassage();
    console.log(Result1);
    // const Result = this.service2.LoggerData();
    // console.log(Result);
  }

}
