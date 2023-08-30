import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encontrar'
})
export class EncontrarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
