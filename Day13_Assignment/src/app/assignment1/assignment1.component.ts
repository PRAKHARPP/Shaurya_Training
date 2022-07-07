import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
fNameLenght:number=0;
lNameLenght:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(fName:any,lName:any)
  {
  this.fNameLenght=fName.value.length;
  this.lNameLenght=lName.value.length;
   }
}
