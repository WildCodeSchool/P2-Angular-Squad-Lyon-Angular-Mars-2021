import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../common/articles.service';
import { Article } from '../common/article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  // je crée une variable de type Articles qui va contenir ensuite les données JSON
  public articles: Article[]= [];

  // J'instancie le service
  constructor(public articlesService: ArticlesService) {}
  
  ngOnInit(): void {
    // je lance la souscription pour l'affichage des articles via le fichier JSON
      this.articlesService.getArticles().subscribe((response: Article[]) => {
          this.articles = response;});            
  }
}
