import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleInconnuComponent } from './article-inconnu.component';

describe('ArticleInconnuComponent', () => {
  let component: ArticleInconnuComponent;
  let fixture: ComponentFixture<ArticleInconnuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleInconnuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleInconnuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
