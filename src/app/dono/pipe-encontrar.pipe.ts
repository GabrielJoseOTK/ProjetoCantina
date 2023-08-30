import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeEncontrar'
})
export class PipeEncontrarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
