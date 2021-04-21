import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderJoueusesComponent } from './slider-joueuses/slider-joueuses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { route } from './app.routes'

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { FootballComponent } from './football/football.component';
import { BasketballComponent } from './basketball/basketball.component';
import { RugbyComponent } from './rugby/rugby.component';
import { TennisComponent } from './tennis/tennis.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderJoueusesComponent,
    FooterComponent,
    NewsComponent,
    NavBarComponent,
    ArticlesListComponent,
    FootballComponent,
    BasketballComponent,
    RugbyComponent,
    TennisComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
