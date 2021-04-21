import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBasketBall1Component } from './article-basket-ball1.component';

describe('ArticleBasketBall1Component', () => {
  let component: ArticleBasketBall1Component;
  let fixture: ComponentFixture<ArticleBasketBall1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleBasketBall1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBasketBall1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
