import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTennis3Component } from './article-tennis3.component';

describe('ArticleTennis3Component', () => {
  let component: ArticleTennis3Component;
  let fixture: ComponentFixture<ArticleTennis3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTennis3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTennis3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
