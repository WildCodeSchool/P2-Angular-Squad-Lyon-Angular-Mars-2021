import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRugby1Component } from './article-rugby1.component';

describe('ArticleRugby1Component', () => {
  let component: ArticleRugby1Component;
  let fixture: ComponentFixture<ArticleRugby1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleRugby1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRugby1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
