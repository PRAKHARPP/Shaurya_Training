import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
TextMsg = "My Angular Application";
TrainingFees = 18000;
TodayDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
