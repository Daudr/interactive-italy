import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JsonPipe } from '@angular/common';

import { InteractiveItalyModule } from '@daudr/interactive-italy'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [InteractiveItalyModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should not display regions if there aren\'t some selected', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3')).toBeFalsy();
  });

  it('should display regions if some are selected', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const json = new JsonPipe();
    const component = fixture.componentInstance;
    component.onChange(['Toscana', 'Lazio']);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3')).toBeTruthy();
  });
});
