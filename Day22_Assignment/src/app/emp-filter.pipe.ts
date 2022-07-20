import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

  transform(empData: any, ...args: unknown[]): unknown {
    return empData;
  }

}
