import { Component } from '@angular/core';

@Component({
  selector: 'daudr-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  selectedRegions: string[] = [];

  onChange(regions: string[]) {
    this.selectedRegions = regions;
  }
}
