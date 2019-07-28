import { Component, Output, EventEmitter } from '@angular/core';
import { REGIONS } from './map';

@Component({
  selector: 'daudr-interactive-italy',
  template: `
    <svg
      mapsvg:geoViewBox="6.624486 47.092916 18.521301 35.490303"
      width="460.30981"
      height="562.58575"
    >
      <path
        *ngFor="let region of regions"
        [attr.d]="region.d"
        [attr.title]="region.title"
        (click)="onRegionClick(region.title)"
        [ngClass]="{ selected: region.title | selected: selectedRegions }"
      />
    </svg>
  `,
  styleUrls: ['./interactive-italy.component.scss']
})
export class InteractiveItalyComponent {
  public regions = REGIONS;
  public selectedRegions: string[] = [];

  @Output() regionsChange = new EventEmitter<string[]>();

  onRegionClick(region: string) {
    const index = this.selectedRegions.indexOf(region);
    index === -1 ? this.selectedRegions.push(region) : this.selectedRegions.splice(index, 1);

    this.regionsChange.emit(this.selectedRegions);
  }
}
