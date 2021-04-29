import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuisommesnousComponent } from './quisommesnous/quisommesnous.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectencoursComponent } from './directencours/directencours.component';
import { SliderJoueusesComponent } from './slider-joueuses/slider-joueuses.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { route } from './app.routes'
import { ArticlesComponent } from './articles/articles.component';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { FootballComponent } from './football/football.component';
import { BasketballComponent } from './basketball/basketball.component';
import { RugbyComponent } from './rugby/rugby.component';
import { TennisComponent } from './tennis/tennis.component';
import { ClassementCalendrierComponent } from './classement-calendrier/classement-calendrier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    QuisommesnousComponent,
    DirectencoursComponent,
    SliderJoueusesComponent,
    QuisommesnousComponent,
    DirectencoursComponent,
    SliderJoueusesComponent,
    FooterComponent,
    NewsComponent,
    NavBarComponent,
    ArticlesListComponent,
    FootballComponent,
    BasketballComponent,
    RugbyComponent,
    TennisComponent,
    ClassementCalendrierComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route, {scrollPositionRestoration: 'top'}),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
