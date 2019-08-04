import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InteractiveMapModule } from '@daudr/interactive-map';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InteractiveMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
