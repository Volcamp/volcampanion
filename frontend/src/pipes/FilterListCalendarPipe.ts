import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filterListCalendarPipe'
})
export class FilterListCalendarPipe implements PipeTransform {
  transform(items: any[], isZeroOccurrence: boolean): any[] {
    if (!items) return [];
    if (!isZeroOccurrence) return items;

    return items.filter(item => {
        return item.meta.occurrence === 0;
    });
  }
}


