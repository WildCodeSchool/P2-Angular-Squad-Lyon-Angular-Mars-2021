import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectencoursComponent } from './directencours.component';

describe('DirectencoursComponent', () => {
  let component: DirectencoursComponent;
  let fixture: ComponentFixture<DirectencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectencoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
