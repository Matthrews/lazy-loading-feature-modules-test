import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuc',
  pure: true,
})
export class FucPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log('I am fuc from products...', value, args);
    return 'fuc pipe from products';
  }
}
