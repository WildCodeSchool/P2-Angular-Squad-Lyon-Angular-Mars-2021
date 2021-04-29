import { Injectable } from '@angular/core';
import { Joueuse } from './common/joueuse';

@Injectable({
  providedIn: 'root'
})
export class JoueusesSliderService {

  joueusesList: Joueuse[] = [
    {
      sport: 'Football',
      nom: 'Zidane',
      img: 'assets/img/article1.jpg',

    },
    {
      sport: 'Rugby',
      nom: 'Zlatan',
      img: 'assets/img/article1.jpg',

    },
    {
      sport: 'Tennis',
      nom: 'Cantona',
      img: 'assets/img/article1.jpg',

    },
    {
      sport: 'Basketball',
      nom: 'Federer',
      img: 'assets/img/article1.jpg',

    },
    {
      sport: 'Tennis',
      nom: 'Lebron',
      img: 'assets/img/article1.jpg',

    },
  ]


  constructor() {
  }

  getJoueuses() {
    return this.joueusesList;
  }

}
