import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRugby3Component } from './article-rugby3.component';

describe('ArticleRugby3Component', () => {
  let component: ArticleRugby3Component;
  let fixture: ComponentFixture<ArticleRugby3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleRugby3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRugby3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
