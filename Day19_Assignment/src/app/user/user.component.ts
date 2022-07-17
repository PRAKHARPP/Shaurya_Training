import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
Name:any;
childshow:boolean=true;
  constructor() {
    console.log("User Constructor");
   }

  ngOnInit(): void {
    console.log("User ngOnInit");
   
  }

  Submit(uName:any)
  {
    this.Name=uName.value;
    
  }

  onDestroyHandler()
  {
    if(this.childshow===true)
    {
      this.childshow=false;
    }
    else{
      this.childshow=true;
    }
  }

  // ngOnDestroy()
  // {
  //   console.log("User ngOnDestroy");
  // }

  // ngDOCheck()
  // {
  //   console.log("User ngDOCheck");
  // }

  // ngAfterContentInit()
  // {
  //   console.log("User ngAfterContentChecked");
  // }

  // ngAfterContentChecked()
  // {
  //   console.log("User ngAfterContentChecked");
  // }

  // ngAfterViewInit()
  // {
  //   console.log("User ngAfterViewInit");
  // }

  // ngAfterViewChecked()
  // {
  //   console.log("User ngAfterViewChecked");
  // }

  // ngOnChanges()
  // {
  //   console.log("User ngOnChanges");
  // }

}
