import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that tells if a region has been selected
 */
@Pipe({
  name: 'selected',
  pure: false
})
export class SelectedPipe implements PipeTransform {
  /**
   * Check if a region has been selected
   * @param value region to check
   * @param regions array of selected regions
   */
  transform(value: string, regions: string[]): boolean {
    return regions.indexOf(value) !== -1;
  }
}
