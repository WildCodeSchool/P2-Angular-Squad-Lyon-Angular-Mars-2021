import { Component, OnInit } from '@angular/core';
import { TestArticles } from '../common/test-articles';
import { ArticlesService } from '../common/articles.service';

@Component({
selector: 'app-news',
templateUrl: './news.component.html',
styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
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
