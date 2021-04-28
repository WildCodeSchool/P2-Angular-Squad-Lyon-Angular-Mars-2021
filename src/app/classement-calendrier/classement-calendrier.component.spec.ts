import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementCalendrierComponent } from './classement-calendrier.component';

describe('ClassementCalendrierComponent', () => {
  let component: ClassementCalendrierComponent;
  let fixture: ComponentFixture<ClassementCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementCalendrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
