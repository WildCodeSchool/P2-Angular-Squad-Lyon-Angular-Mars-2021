import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFoot2Component } from './article-foot2.component';

describe('ArticleFoot2Component', () => {
  let component: ArticleFoot2Component;
  let fixture: ComponentFixture<ArticleFoot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleFoot2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFoot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
