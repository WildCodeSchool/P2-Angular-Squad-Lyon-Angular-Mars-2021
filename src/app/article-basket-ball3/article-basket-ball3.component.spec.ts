import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBasketBall3Component } from './article-basket-ball3.component';

describe('ArticleBasketBall3Component', () => {
  let component: ArticleBasketBall3Component;
  let fixture: ComponentFixture<ArticleBasketBall3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleBasketBall3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBasketBall3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
