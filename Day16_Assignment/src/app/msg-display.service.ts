import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MsgDisplayService {

  constructor(private logger : LoggerService ) { }

  DisplayMassage():string
  {
      return "Mgs Display service :- "+ this.logger.LoggerData();
  }
}
