import { Routes } from '@angular/router';

/*import { FootballComponent } from './football/football.component';
import { BasketComponent } from './basketball/basketball.component';
import { RugbyComponent } from './rugby/rugby.component';
import { TennisComponent } from './tennis/tennis.component';
import { ContactComponent } from './contact/contact.component';*/

import { NewsComponent } from './news/news.component';


const route: Routes = [

  { path: '', redirectTo: '/football', pathMatch: 'full' },
  { path: 'football', component: NewsComponent },
  /*{ path: 'basketball', component: BasketComponent },
  { path: 'rugby', component: RugbyComponent },
  { path: 'tennis', component: TennisComponent },
  { path: 'contact', component: ContactComponent },*/
  { path: 'news', component: NewsComponent },

];


export { route };