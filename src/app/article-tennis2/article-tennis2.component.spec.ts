import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTennis2Component } from './article-tennis2.component';

describe('ArticleTennis2Component', () => {
  let component: ArticleTennis2Component;
  let fixture: ComponentFixture<ArticleTennis2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTennis2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTennis2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
