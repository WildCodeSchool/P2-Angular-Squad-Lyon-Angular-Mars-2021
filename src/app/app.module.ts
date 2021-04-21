import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleFoot1Component } from './article-foot1/article-foot1.component';
import { ArticleFoot2Component } from './article-foot2/article-foot2.component';
import { ArticleFoot3Component } from './article-foot3/article-foot3.component';
import { ArticleRugby1Component } from './article-rugby1/article-rugby1.component';
import { ArticleRugby2Component } from './article-rugby2/article-rugby2.component';
import { ArticleRugby3Component } from './article-rugby3/article-rugby3.component';
import { ArticleTennis1Component } from './article-tennis1/article-tennis1.component';
import { ArticleTennis2Component } from './article-tennis2/article-tennis2.component';
import { ArticleTennis3Component } from './article-tennis3/article-tennis3.component';
import { ArticleBasketBall1Component } from './article-basket-ball1/article-basket-ball1.component';
import { ArticleBasketBall2Component } from './article-basket-ball2/article-basket-ball2.component';
import { ArticleBasketBall3Component } from './article-basket-ball3/article-basket-ball3.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleFoot1Component,
    ArticleFoot2Component,
    ArticleFoot3Component,
    ArticleRugby1Component,
    ArticleRugby2Component,
    ArticleRugby3Component,
    ArticleTennis1Component,
    ArticleTennis2Component,
    ArticleTennis3Component,
    ArticleBasketBall1Component,
    ArticleBasketBall2Component,
    ArticleBasketBall3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
