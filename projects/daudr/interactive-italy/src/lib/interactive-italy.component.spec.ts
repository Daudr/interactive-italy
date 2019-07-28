import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { InteractiveItalyComponent } from './interactive-italy.component';
import { SelectedPipe } from './selected.pipe';
import { By } from '@angular/platform-browser';

describe('MapComponent', () => {
  let component: InteractiveItalyComponent;
  let fixture: ComponentFixture<InteractiveItalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveItalyComponent, SelectedPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #OnRegionClick when region clicked', fakeAsync(() => {
    spyOn(component, 'onRegionClick');

    const toscana = fixture.debugElement.query(By.css('[title="Toscana"]'));
    toscana.triggerEventHandler('click', 'Toscana');
    tick();
    fixture.detectChanges();

    expect(component.onRegionClick).toHaveBeenCalledTimes(1);

    const veneto = fixture.debugElement.query(By.css('[title="Veneto"]'));
    veneto.triggerEventHandler('click', 'Veneto');
    tick();
    fixture.detectChanges();

    expect(component.onRegionClick).toHaveBeenCalledTimes(2);

    toscana.triggerEventHandler('click', 'Toscana');
    tick();
    fixture.detectChanges();

    expect(component.onRegionClick).toHaveBeenCalledTimes(3);

    // component.onRegionClick('Toscana');
    // tick();
    // expect(component.selectedRegions.length).toBeGreaterThan(0);

    // component.onRegionClick('Toscana');
    // tick();
    // expect(component.selectedRegions.length).toBe(0);
  }));
});
