import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(array: any[], text: string, column: string): any[] {
    if (text === '') {
      return array;
    }
    const filter = text.toLowerCase()
    return array.filter( item => item[column].toLowerCase().includes(filter));
  }

}
