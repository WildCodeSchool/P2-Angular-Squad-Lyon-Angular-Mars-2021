import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFoot3Component } from './article-foot3.component';

describe('ArticleFoot3Component', () => {
  let component: ArticleFoot3Component;
  let fixture: ComponentFixture<ArticleFoot3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFoot3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFoot3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
