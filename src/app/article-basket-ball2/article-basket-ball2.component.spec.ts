import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBasketBall2Component } from './article-basket-ball2.component';

describe('ArticleBasketBall2Component', () => {
  let component: ArticleBasketBall2Component;
  let fixture: ComponentFixture<ArticleBasketBall2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleBasketBall2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBasketBall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
