import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InteractiveItalyModule } from '@daudr/interactive-italy';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InteractiveItalyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
