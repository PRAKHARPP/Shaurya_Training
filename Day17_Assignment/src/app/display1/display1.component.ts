import { Component, OnInit } from '@angular/core';
import { contacts } from '../display1-service.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
AddContact:string="";
DeleteContact:string="";
EditContact:string="";
ListContact:string="";
  constructor() { }

  ngOnInit(): void {
   const data1 = new contacts.AddNewContact();
   this.AddContact=data1.Display();

   const data2 = new contacts.DeleteContact;
   this.DeleteContact=data2.Display();

   const data3 = new contacts.EditContacct;
   this.EditContact=data3.Display();

   const data4 = new contacts.ListContact;
   this.ListContact=data4.Display();

  }

}
