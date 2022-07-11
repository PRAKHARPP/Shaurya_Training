import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }

  static HeaderText = "This is my Service using Static modifier";

}
