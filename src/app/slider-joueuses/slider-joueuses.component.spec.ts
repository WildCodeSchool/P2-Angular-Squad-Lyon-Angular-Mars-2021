import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderJoueusesComponent } from './slider-joueuses.component';

describe('SliderJoueusesComponent', () => {
  let component: SliderJoueusesComponent;
  let fixture: ComponentFixture<SliderJoueusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderJoueusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderJoueusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
