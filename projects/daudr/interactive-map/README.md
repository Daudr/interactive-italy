# @daudr/interactive-map

A simple, lightweigth library that displayn interactive map.

This library contains a simple component that can be used to visualize an interactive SVG map.
Default maps that can be selected are Italy or USA.
There is also the possibility to specify a custom map as needed.

## Installing the lib

To install the lib just type in your terminal
`npm install --save @daudr/interactive-map`
or, if you're using yarn
`yarn add @daudr/interactive-map`

## Using the lib

First you need to import the `InteractiveMapModule` from this library inside your module

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

--> import { InteractiveMapModule } from '@daudr/interactive-map';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
-->    InteractiveMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then in your template you can use the `daudr-interactive-map` component:

`<daudr-interactive-map (regionsChange)="onChange($event)"></daudr-interactive-map>`
