import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  // Show: boolean = false;
  Show : number = -1;
  constructor() { }

  ngOnInit(): void {
  }

  onTriggle()
  {
    // this.Show = !this.Show;
    if(this.Show===0)
    {
      this.Show=1;
    }
    else if(this.Show===1)
    {
      this.Show=2;
    }
    else if(this.Show===2)
    {
      this.Show=-1;
    }
    else
    {
      this.Show=0;
    }
  }
}
