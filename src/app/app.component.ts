import { Component } from '@angular/core';

@Component({
  selector: 'daudr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedRegions: string[] = [];
  usaRegions: string[] = [];

  onChange(regions: string[], type: 'italy' | 'usa' = 'italy') {
    if (type === 'italy') {
      this.selectedRegions = regions;
    } else {
      this.usaRegions = regions;
    }
  }
}
