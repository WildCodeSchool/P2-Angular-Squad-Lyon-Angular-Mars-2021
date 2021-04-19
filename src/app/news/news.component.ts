import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  Articles: Object[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
