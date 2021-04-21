import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderJoueusesComponent } from './slider-joueuses/slider-joueuses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderJoueusesComponent,
    FooterComponent,
    NewsComponent,
    NavBarComponent,
    ArticlesListComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
