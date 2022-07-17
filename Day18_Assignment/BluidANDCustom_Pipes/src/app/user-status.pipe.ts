import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
     if(value==='A' || value==='a')
     {

      return 'Active';
     }
     else if(value==='D' || value==='d')
     {
      return 'Disabled';
     }
     else
     {
      return 'Invaild Status';
     }
  }

}
