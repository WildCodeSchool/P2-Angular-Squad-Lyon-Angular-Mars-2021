import { Component, OnInit } from '@angular/core';
import { TestArticles, testArticlesList } from '../common/test-articles';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  Articles: TestArticles[] = testArticlesList;
  constructor() {}

  ngOnInit(): void {}
}