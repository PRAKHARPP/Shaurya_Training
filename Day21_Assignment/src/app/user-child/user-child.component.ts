import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.css']
})
export class UserChildComponent implements OnInit {
@Input('PropUser') UserData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
