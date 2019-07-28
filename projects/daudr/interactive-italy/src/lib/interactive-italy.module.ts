import { NgModule } from '@angular/core';
import { InteractiveItalyComponent } from './interactive-italy.component';
import { SelectedPipe } from './selected.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [InteractiveItalyComponent, SelectedPipe],
  imports: [CommonModule],
  exports: [InteractiveItalyComponent, SelectedPipe]
})
export class InteractiveItalyModule {}
