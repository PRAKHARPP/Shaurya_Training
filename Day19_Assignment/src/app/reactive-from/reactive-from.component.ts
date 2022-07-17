import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css']
})
export class ReactiveFromComponent implements OnInit {
  frmContact:any;
  constructor() { }

  ngOnInit(): void {
    this.frmContact = new FormGroup(
      {
         ContactID: new FormControl(""),
         ContactName: new FormControl(""), 
         address: new FormControl(""), 
         pinCode: new FormControl(""), 
      }
    )
  }

  onSubmit(contactForm:any){
    console.log(contactForm);
  }

}
