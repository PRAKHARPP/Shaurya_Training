import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
UserData:any=[];
selectedUserID:number=0;
  constructor() { }

  ngOnInit(): void {

    this.UserData = [
      {uID:1,uName:"Akash",status:"Active",role:"Admin"},
      {uID:2,uName:"Prakhar",status:"Deactive",role:"User"},
      {uID:3,uName:"Yash",status:"Deactive",role:"Admin"},
      {uID:4,uName:"Om",status:"Active",role:"Manager"},
      {uID:5,uName:"Jay",status:"Deactive",role:"Manager"},
      {uID:6,uName:"Karan",status:"Active",role:"User"}
    ]
  }

  onDetails(selectedId:number){
    this.selectedUserID= selectedId;
  }

}
