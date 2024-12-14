import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'artisantFilter',
        standalone: true
      })
export class ArtisantFilterPipe implements PipeTransform {

  transform(artisants: any[], filter?: string): any[] {
    if (!artisants || !filter) {
      return artisants;
    } else {
      filter = filter.toLowerCase();
      return artisants.filter(artisant => artisant.name.toLowerCase().includes(filter) || artisant.type.toLowerCase().includes(filter));
    }
  }

}
