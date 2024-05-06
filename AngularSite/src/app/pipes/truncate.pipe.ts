import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(input: string, length: number): unknown { 
     return (input.length > length)? input.substring(0, length).trim() + '...' : input;
  }
}
