import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article.model';
import { ArticlesService } from '../common/articles.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
    //je crée ma liste d'articles
public articles: Article[] = [];

// J'initie un tableau qui va recevoir le résultat de la condition
public articleBySport = [];

// J'instancie l'appel au service ArticlesService et au router en créant les deux variables correspondantes
constructor(public articlesService: ArticlesService, private router: Router) {
}

// j'appelle le service pour remplir mon tableau d'articles
ngOnInit(): void {
    this.articlesService.getArticles().subscribe((response: Article[]) => {
    this.articles = response});
}

// J'affiche les articles selon les sports et la page correspondante
 filterBySport(){
     // Je vérifie si l'url contient football
   if(this.router.url.includes('/football')){
        // Je lui demande d'afficher les articles qui ont pour la catégorie "sport" le "foot"
   this.articleBySport = this.articles.filter(item => item.sport === "FOOT")
    }
     // Je vérifie si l'url contient le rugby
    else if(this.router.url.includes('/rugby')){
        // Je lui demande d'afficher les articles qui ont pour la catégorie "sport" le "rugby"
        this.articleBySport = this.articles.filter(item => item.sport === "RUGBY")
         }
     // Je vérifie si l'url contient le basketball
    else if(this.router.url.includes('/basketball')){
        // Je lui demande d'afficher les articles qui ont pour la catégorie "sport" le "basketball"
        this.articleBySport = this.articles.filter(item => item.sport === "BASKETBALL")
         }
    // Je vérifie si l'url contient le tennis
    else if(this.router.url.includes('/tennis')){
        // Je lui demande d'afficher les articles qui ont pour la catégorie "sport" le "tennis"
        this.articleBySport = this.articles.filter(item => item.sport === "TENNIS")
} 

// Je retourne le résultat via le tableau créé
return this.articleBySport;
}
}