import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderJoueusesComponent } from './slider-joueuses/slider-joueuses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SliderJoueusesComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap:  [AppComponent]
})
export class AppModule { }
