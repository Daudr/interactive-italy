import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { InteractiveMapComponent } from './interactive-map.component';
import { SelectedPipe } from './selected.pipe';
import { By } from '@angular/platform-browser';

describe('MapComponent', () => {
  let component: InteractiveMapComponent;
  let fixture: ComponentFixture<InteractiveMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveMapComponent, SelectedPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveMapComponent);
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
