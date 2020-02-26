import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'capitalize'
})
export class TestePipe implements PipeTransform {

  transform(value: string): string {
    const values = value.split(' ');
    let result = '';
    values.forEach(word => result += this.capitalize(word) + ' ');
    return result;
  }

  capitalize(word: string) {
    return word ? word[0].toUpperCase() + word.substr(1).toLowerCase() : word;
  }
}
