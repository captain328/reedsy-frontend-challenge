import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, length: number): unknown {
    if (value.length <= length) {
      return value;
    }
    return `${value.slice(0, length)}...`;
  }

}
