import { Component, OnInit } from '@angular/core';
import { TestArticles } from '../common/test-articles';
import { ArticlesService } from '../common/articles.service';
import { Router } from '@angular/router'

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
    //je crée ma liste d'articles
    public articles: TestArticles[] = [];
    public service: ArticlesService;
    //
    public articleBySport = [];

    constructor(public articlesService: ArticlesService, private router: Router) {
        this.service = articlesService;
    }

    // j'appelle le service pour remplir mon tableau d'articles
    ngOnInit(): void {
        this.service.getArticles().subscribe((response: TestArticles[]) => {
            this.articles = response
        });
    }

    // J'affiche les articles selon les sports et la page correspondante
    filterBySport() {
        if (this.router.url.includes('/football')) {
            this.articleBySport = this.articles.filter(item => item.sport === "FOOT")
            return this.articleBySport;
        }
        else if (this.router.url.includes('/rugby')) {
            this.articleBySport = this.articles.filter(item => item.sport === "RUGBY")
            return this.articleBySport;
        }
        else if (this.router.url.includes('/basketball')) {
            this.articleBySport = this.articles.filter(item => item.sport === "BASKETBALL")
            return this.articleBySport;
        }
        else if (this.router.url.includes('/tennis')) {
            this.articleBySport = this.articles.filter(item => item.sport === "TENNIS")
            return this.articleBySport;
        }
    }
}