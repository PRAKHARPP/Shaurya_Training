import { Component, OnInit } from '@angular/core';

 interface EmployeeDetail{
  ContactName:string,
  ContactAdd:string,
  Contactph:number,
  areaCode:string;
  

}

@Component({
  selector: 'app-interface-use',
  templateUrl: './interface-use.component.html',
  styleUrls: ['./interface-use.component.css']
})
export class InterfaceUseComponent implements OnInit {
  // ContactName1:string="";
  // ContactAdd:string="";
  // Contactph:number=0;
  // areaCode:string="";
  arrEmp:EmployeeDetail={ContactName:"",ContactAdd:"",Contactph:0,areaCode:""};
  constructor() { }

  ngOnInit(): void {
    
  }

  Display()
  {
   this.arrEmp = {ContactName:'Nidhi Singh',ContactAdd:'H.no.1234',Contactph:4578964654,areaCode:'South Zone'};
  //  var arrEmp:EmployeeDetail = {ContactName:'Nidhi Singh',ContactAdd:'H.no.1234',Contactph:4578964654,areaCode:'South Zone'};
    // this.ContactName1=arrEmp.ContactName;
    // this.ContactAdd=arrEmp.ContactAdd;
    // this.Contactph=arrEmp.Contactph;
    // this.areaCode=arrEmp.areaCode;
    console.log(this.arrEmp);
  }
}
