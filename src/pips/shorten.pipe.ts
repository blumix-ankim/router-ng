import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (value.length >= 10) {
      return value.slice(10) + '...';
    } else {
      return value;
    }
  }
}
