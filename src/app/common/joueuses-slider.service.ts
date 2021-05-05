import { Injectable } from '@angular/core';
import { Joueuse } from './joueuse';

@Injectable({
  providedIn: 'root'
})
export class JoueusesSliderService {

  joueusesList: Joueuse[] = [
    {
      sport: 'Rugby',
      nom: 'Jessy Tremouliere',
      img: 'assets/img/imgSlider/tremouliere.png',
      desc: 'Elue meilleure joueuse de la dernière décennie'

    },
    {
      sport: 'Basketball',
      nom: 'Iliana Rupert',
      img: 'assets/img/imgSlider/rupert.png',
      desc: 'Le grand espoir du basket français.'

    },
    {
      sport: 'Football',
      nom: 'Megan Rapinoe',
      img: 'assets/img/imgSlider/rapinoe.png',
      desc: "Ballon d'Or de la dernière coupe du monde."

    },
  ]


  constructor() {
  }

  getJoueuses() {
    return this.joueusesList;
  }

}
