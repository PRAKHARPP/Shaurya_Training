import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input('propCounter') userName:any;
  constructor() {
    console.log( "User Detail constructor");
   }

   ngOnChanges(changes: SimpleChanges){

    console.log("User Detail ngOnChanges");
    const { userName } = changes;
    console.log(userName?.currentValue, userName?.previousValue);

   }

  ngOnInit(): void {
    console.log( "User Detail ngOnInit");
  }

  // ngOnDestroy()
  // {
  //   console.log("User Detail ngOnDestroy");
  // }

  // ngDOCheck()
  // {
  //   console.log("User Detail ngDOCheck");
  // }

  // ngAfterContentInit()
  // {
  //   console.log("User ngAfterContentChecked");
  // }

  // ngAfterContentChecked()
  // {
  //   console.log("User Detail ngAfterContentChecked");
  // }

  // ngAfterViewInit()
  // {
  //   console.log("User Detail ngAfterViewInit");
  // }

  // ngAfterViewChecked()
  // {
  //   console.log("User Detail ngAfterViewChecked");
  // }

  // ngOnChanges()
  // {
  //   console.log("User Detail ngOnChanges");
  // }

  

}
