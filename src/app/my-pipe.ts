import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({ name: 'myPipe' })
export class MyPipe implements PipeTransform {
  transform(value: any, filterCond) {
    return value.filter((item) => item.age > filterCond);
  }
}
