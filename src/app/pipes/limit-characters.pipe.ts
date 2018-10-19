import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    // if (value.length > limit) {
    //   let str1 = value;
    //   let str2 = '';
    //   let lines = Math.round(value.length / limit);

    //   for (let i = 0; i < lines; i++) {
    //     str2 = str2 +'\n'+str1.slice(0, limit);
    //     str1 = str1.slice(limit);
    //   }
    //   str2 = str2+'\n'+str1;
    //   return str2;
    // }
    return value;
  }

}
