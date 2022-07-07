import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  colorType:color=color.None;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(CNo:any)
  {
    if(CNo === 1) {
      this.colorType = color.Red;
    } else if(CNo === 2 ) {
      this.colorType = color.Green;
    } else if(CNo === 3) {
      this.colorType = color.Blue;
    } else if(CNo === 4) {
      this.colorType = color.Black;
    } else
    {
      this.colorType = color.None
    }
  }
}

enum color {

  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Black="Black",
  None = "None"
}
