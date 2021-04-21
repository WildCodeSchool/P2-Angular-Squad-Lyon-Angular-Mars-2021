import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTennis1Component } from './article-tennis1.component';

describe('ArticleTennis1Component', () => {
  let component: ArticleTennis1Component;
  let fixture: ComponentFixture<ArticleTennis1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTennis1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTennis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
