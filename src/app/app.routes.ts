import { Routes } from '@angular/router';

import { FootballComponent } from './football/football.component';
import { BasketballComponent } from './basketball/basketball.component';

import { NewsComponent } from './news/news.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { SliderJoueusesComponent } from './slider-joueuses/slider-joueuses.component';
import { QuisommesnousComponent } from './quisommesnous/quisommesnous.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesComponent } from './articles/articles.component';



const route: Routes = [

  { path: '', redirectTo: '/football', pathMatch: 'full' },
  { path: 'football', component: FootballComponent },
  { path: 'basketball', component: BasketballComponent },
  { path: 'contact', component: QuisommesnousComponent },
  { path: 'about', component: QuisommesnousComponent },
  { path: 'news', component: ArticlesListComponent },
  { path: "**", component: PageNotFoundComponent },


];


export { route };