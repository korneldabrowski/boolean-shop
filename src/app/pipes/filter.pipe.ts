import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], sectionTitle: string): any[] {
    return items.filter((item) => item.category === sectionTitle);
  }
}
