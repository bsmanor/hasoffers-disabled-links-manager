import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters'
})
export class LimitCharactersPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    let tmpStr = '';
    if (value.length > limit) {
    // console.log('====================================');
    // console.log('Initial value is ' + value);
    // console.log('====================================');
    // const lines = value.length / limit;
    // let strToReturn = '';
    // for (let i = 0; i < lines; i++) {
    //   tmpStr.concat(value.slice((i * limit), ((i + 1) * limit)) + '\n'); 
    // }
    // console.log('tmpStr is: ');
    // console.log(tmpStr);
    

      return `${value.slice(0, limit)}
      ${value.slice(limit, value.length)}`;
    }
    return;
  }

}
