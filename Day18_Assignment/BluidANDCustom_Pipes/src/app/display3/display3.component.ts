import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {
arrUser:any=[
  {userID:1, userName:'Rupesh',status:'A'},
  {userID:2, userName:'Asha',status:'D'},
  {userID:3, userName:'Mayur',status:'A'},
  {userID:4, userName:'Abhijit',status:'D'},
  {userID:5, userName:'Varsha',status:'D'},
  {userID:6, userName:'Anuj',status:'A'},
  {userID:7, userName:'Viraj',status:'k'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
