import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1-ng-class',
  templateUrl: './assignment1-ng-class.component.html',
  styleUrls: ['./assignment1-ng-class.component.css']
})
export class Assignment1NgClassComponent implements OnInit {
nameColor:String="";
selectedColor:string="";
  constructor() { }

  ngOnInit(): void {
  }

  // onBlue()
  // {
  //   this.nameColor="Blue";
  // }
  // onGreen()
  // {
  //   this.nameColor="Green";
  // }
  // onRed()
  // {
  //   this.nameColor="Red";
  // }

  onChangeColor(colorName:string)
  {
    this.selectedColor = colorName;
  }


}
