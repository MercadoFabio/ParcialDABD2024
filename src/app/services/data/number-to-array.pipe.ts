import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray',
  standalone: true
})
export class NumberToArrayPipe implements PipeTransform {
  transform(value: number): any[] {
    return Array(value);
  }

}
