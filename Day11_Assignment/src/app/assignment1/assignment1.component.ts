import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  ContactID: number = 456;
  ContactName : string = "Prakhar Pande";
  Company: string = "Abc Pvt Ltd";
  DueAmount: number = 87945;
  Phone : any = 9745613578;
  Area  = "South Zone";

  constructor() { }

  ngOnInit(): void {
  }

}
