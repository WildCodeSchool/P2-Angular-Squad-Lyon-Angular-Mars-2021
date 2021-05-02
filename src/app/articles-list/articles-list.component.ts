import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../common/articles.service';
import { TestArticles } from '../common/test-articles';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  public articles: TestArticles[];
  public service: ArticlesService;
  
  constructor(public articlesService: ArticlesService) {
      this.service = articlesService;
  }
  
  ngOnInit(): void {
      this.service.getArticles().subscribe((response: TestArticles[]) => {
          this.articles = response;});
  }
  }