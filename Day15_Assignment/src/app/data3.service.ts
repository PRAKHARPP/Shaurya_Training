import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor() { }

  private HeaderText = "This is my Service using Private Modifier";

  MassageNotify():string
  {
     return this.HeaderText;
  }

}
