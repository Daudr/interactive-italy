import { NgModule } from '@angular/core';
import { InteractiveMapComponent } from './interactive-map.component';
import { SelectedPipe } from './selected.pipe';
import { CommonModule } from '@angular/common';

/**
 * Module of the library, exports the component and the pipe
 */
@NgModule({
  declarations: [InteractiveMapComponent, SelectedPipe],
  imports: [CommonModule],
  exports: [InteractiveMapComponent]
})
export class InteractiveMapModule {}
