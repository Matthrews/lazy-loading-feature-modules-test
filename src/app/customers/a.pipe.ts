import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bar',
  pure: true,
})
export class BarPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log('I am bar from customers...', value, args);
    return 'bar pipe from customers';
  }
}
