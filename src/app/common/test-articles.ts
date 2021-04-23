export class TestArticles {
  public link: string;
  public img: string;
  public sport: string;
  public date: string;
  public desc: string;
  constructor(
    link: string,
    img: string,
    sport: string,
    date: string,
    desc: string
  ) {
    this.link = link;
    this.img = img;
    this.sport = sport;
    this.date = date;
    this.desc = desc;
  }
}

// A mettre dans un JSON et appeler via un service pour la version "finale"
export const testArticlesList: TestArticles[] = [
  {
    link: '#',
    img: '../../assets/img/article1.jpg',
    sport: 'FOOT',
    date: '15/04/2021',
    desc: 'Doublé pour Nikita Parris ce week-end',
  },
  {
    link: '#',
    img: '../../assets/img/article2.jpg',
    sport: 'FOOT',
    date: '15/04/2021',
    desc: "Victoire et qualification en Finale pour l'OL",
  },
  {
    link: '#',
    img: '../../assets/img/article3.jpg',
    sport: 'FOOT',
    date: '15/04/2021',
    desc: "L'OL perd de son avance après sa défaite face au PSG",
  },
];
