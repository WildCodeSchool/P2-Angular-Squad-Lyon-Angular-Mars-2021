import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuisommesnousComponent } from './quisommesnous.component';

describe('QuisommesnousComponent', () => {
  let component: QuisommesnousComponent;
  let fixture: ComponentFixture<QuisommesnousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuisommesnousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuisommesnousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
