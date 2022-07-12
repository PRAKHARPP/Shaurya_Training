import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Disp1Data2Service {

  constructor() { }
  Display1Service2():string
  {
    return "This is Service two";
  }
}
