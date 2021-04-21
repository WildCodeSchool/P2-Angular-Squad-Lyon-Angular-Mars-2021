import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFoot1Component } from './article-foot1.component';

describe('ArticleFoot1Component', () => {
  let component: ArticleFoot1Component;
  let fixture: ComponentFixture<ArticleFoot1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFoot1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFoot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
