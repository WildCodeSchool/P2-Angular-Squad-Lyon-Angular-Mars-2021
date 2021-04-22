import { Component, OnInit } from '@angular/core';
import { TestArticles, testArticlesList } from '../common/test-articles';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  articles: TestArticles[] = testArticlesList;
  constructor() {}

  ngOnInit(): void {}
}
