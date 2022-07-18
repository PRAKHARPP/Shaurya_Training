import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-with-validation',
  templateUrl: './reactive-form-with-validation.component.html',
  styleUrls: ['./reactive-form-with-validation.component.css']
})
export class ReactiveFormWithValidationComponent implements OnInit {
fromClient:any;
  constructor() { }

  ngOnInit(): void {
    this.fromClient = new FormGroup({
      ClientId: new FormControl("",[Validators.required, Validators.minLength(6)]),
      ClientName: new FormControl("",[Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      Address: new FormControl("",[Validators.required]),
      PhoneNo: new FormControl("",[Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10), Validators.maxLength(10)])

    })
  }

  onSubmit(froClient:any)
  {
    console.log(froClient);
    console.log("Submited" , this.fromClient.status);
  }

}
