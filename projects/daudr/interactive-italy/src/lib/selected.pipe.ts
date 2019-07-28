import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selected',
  pure: false
})
export class SelectedPipe implements PipeTransform {
  transform(value: string, regions: string[]): boolean {
    return regions.indexOf(value) !== -1;
  }
}
