import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }
 private LoggerMsg:string="Admin logged today At 11pm";
  LoggerData():string
  {
       return "Logger Sevice :- "+this.LoggerMsg;
  }
}
