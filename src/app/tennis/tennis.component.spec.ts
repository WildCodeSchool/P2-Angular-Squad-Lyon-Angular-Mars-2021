import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisComponent } from './tennis.component';

describe('TennisComponent', () => {
  let component: TennisComponent;
  let fixture: ComponentFixture<TennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
