import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { ITALY } from './italy';
import { USA } from './usa';
import { Region } from './region.interface';

/**
 * Main component of the library
 */
@Component({
  selector: 'daudr-interactive-map',
  template: `
    <svg [attr.width]="width" height="550">
      <path
        *ngFor="let region of regions"
        [attr.d]="region.d"
        [attr.title]="region.title"
        (click)="onRegionClick(region.title)"
        [ngClass]="{ selected: region.title | selected: selectedRegions }"
      >
        <title>{{ region.title }}</title>
      </path>
    </svg>
  `,
  styleUrls: ['./interactive-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractiveMapComponent implements OnInit {
  /**
   * Define the type of the map to visualize;
   *
   * Valid options are 'italy', 'usa', and 'custom'.
   *
   * If type is 'custom' regions has to be defined too
   */
  @Input() public type: 'italy' | 'usa' | 'custom' = 'italy';

  /**
   * The regions array define the list of regions to display
   */
  @Input() public regions: Region[];

  /**
   * Width of SVG element
   */
  @Input() width = 959;

  /**
   * Height of the SVG element
   */
  @Input() height: 550;

  /**
   * List of regions that has been selected
   */
  public selectedRegions: string[] = [];

  /**
   * Event fired when a region is being selected or deselected
   */
  @Output() regionsChange = new EventEmitter<string[]>();

  /**
   * Lifecycle hooks, used to define the regions if type isn't 'custom'
   */
  ngOnInit() {
    if (this.type !== 'custom') {
      this.regions = this.type === 'italy' ? ITALY : USA;
    }
  }

  /**
   * Handler invoked when a region is being clicked either to be selected or deselected
   * @param region region that has been clicked
   */
  onRegionClick(region: string) {
    const index = this.selectedRegions.indexOf(region);
    index === -1
      ? this.selectedRegions.push(region)
      : this.selectedRegions.splice(index, 1);

    this.regionsChange.emit(this.selectedRegions);
  }
}
