import { Injectable } from '@angular/core';
import {Disp1Data2Service} from './disp1-data2.service';

@Injectable({
  providedIn: 'root'
})
export class Disp1Data1Service {

  constructor(private data1 : Disp1Data2Service) { }
  
  Display1Service1():string
  {
     return this.data1.Display1Service2();
  }

}
