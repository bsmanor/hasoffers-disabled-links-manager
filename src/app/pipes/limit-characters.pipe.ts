import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (value.length > limit) {
      return `${value.slice(limit)}...`;
    }
    return;
  }

}
