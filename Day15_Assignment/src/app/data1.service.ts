import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { }

  public HeaderText = "This is my serive using public modifier";
}
