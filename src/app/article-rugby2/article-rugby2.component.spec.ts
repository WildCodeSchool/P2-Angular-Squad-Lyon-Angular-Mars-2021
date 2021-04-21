import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRugby2Component } from './article-rugby2.component';

describe('ArticleRugby2Component', () => {
  let component: ArticleRugby2Component;
  let fixture: ComponentFixture<ArticleRugby2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleRugby2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRugby2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
