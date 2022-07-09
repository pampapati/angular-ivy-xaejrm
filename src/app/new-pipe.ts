import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ownPipe' })
export class OwnPipe implements PipeTransform {
  transform(input: any, filterCond: any) {
    return input.filter((item) => item.age > filterCond);
  }
}
