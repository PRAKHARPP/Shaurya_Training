
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-from',
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.css']
})
export class TemplateDrivenFromComponent implements OnInit {
  Result:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmConact:any)
  {
    if(frmConact.status==='VALID')
    {
      this.Result="Valid: Contact form Submitted";
    console.log("Contact form Submitted");
    }
    else
    {
      this.Result="Invalid: Contact form is Invaild"
      console.log("Contact form is Invalid");
    }
  }

}
