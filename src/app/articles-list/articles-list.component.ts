import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../common/articles.service';
import { Article } from '../common/article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  public articles: Article[]= [];
  public disciplineFiltre: string[] = [];

  constructor(public articlesService: ArticlesService) {}
  
  ngOnInit(): void {
      this.articlesService.getArticles().subscribe((response: Article[]) => {
          this.articles = response;});

          this.articlesService.getFilters().subscribe((response: string[]) => {
            return this.disciplineFiltre =  response;});
            console.log(this.disciplineFiltre)
            
  }
}
