import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchDirect } from '../common/match.model';


interface Direct {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-directencours',
  templateUrl: './directencours.component.html',
  styleUrls: ['./directencours.component.css']
})

export class DirectencoursComponent implements OnInit {

  matchListFrance: MatchDirect[] = [
    {
      equipeDomicile: "PSG",
      scoreDomicile: 1,
      equipeExterieur: "Soyaux",
      scoreExterieur: 4
    },
    {
      equipeDomicile: "Guingamp",
      scoreDomicile: 1,
      equipeExterieur: "Le HAC",
      scoreExterieur: 3
    },
    {
      equipeDomicile: "OL",
      scoreDomicile: 3,
      equipeExterieur: "Montpellier",
      scoreExterieur: 2
    },
  ]

  matchListBasketFrance: MatchDirect[] = [
    {
      equipeDomicile: "Flammes Carolo",
      scoreDomicile: 93,
      equipeExterieur: "Lyon",
      scoreExterieur: 121
    },
    {
      equipeDomicile: "VILLENEUVE D'ASCQ",
      scoreDomicile: 77,
      equipeExterieur: "MONTPELLIER",
      scoreExterieur: 83
    },
    {
      equipeDomicile: "ROCHE VENDEE",
      scoreDomicile: 82,
      equipeExterieur: "BASKET LANDES",
      scoreExterieur: 85
    },
  ]

  matchListBasketItalie: MatchDirect[] = [
    {
      equipeDomicile: "Venezia F ",
      scoreDomicile: 34,
      equipeExterieur: "Costa Masnaga F",
      scoreExterieur: 57
    },
    {
      equipeDomicile: "Virtus Bologna F",
      scoreDomicile: 24,
      equipeExterieur: "San Giovanni F",
      scoreExterieur: 18
    },
    {
      equipeDomicile: "Schio F",
      scoreDomicile: 44,
      equipeExterieur: "San Martino",
      scoreExterieur: 88
    },
  ]

  matchListItalie: MatchDirect[] = [
    {
      equipeDomicile: "Juventus FC",
      scoreDomicile: 1,
      equipeExterieur: "FBC",
      scoreExterieur: 2
    },
    {
      equipeDomicile: "AC Milan",
      scoreDomicile: 3,
      equipeExterieur: "Bari",
      scoreExterieur: 4
    },
    {
      equipeDomicile: "AS Roma",
      scoreDomicile: 1,
      equipeExterieur: "ACF Fiorentina",
      scoreExterieur: 2
    },
  ]
  matchListUsa: MatchDirect[] = [
    {
      equipeDomicile: "Chigaco F",
      scoreDomicile: 3,
      equipeExterieur: "Washigton F",
      scoreExterieur: 0
    },
    {
      equipeDomicile: "Houston Dash F",
      scoreDomicile: 2,
      equipeExterieur: "Racing Louisville F",
      scoreExterieur: 1
    },
    {
      equipeDomicile: "Reign F",
      scoreDomicile: 0,
      equipeExterieur: "Gotham F",
      scoreExterieur: 3
    },
  ]

  matchListBasketUsa: MatchDirect[] = [
    {
      equipeDomicile: "Dallas Wings",
      scoreDomicile: 63,
      equipeExterieur: "Atlanta Dream",
      scoreExterieur: 98
    },
    {
      equipeDomicile: "L.A Sparks",
      scoreDomicile: 73,
      equipeExterieur: "Chicago Sky",
      scoreExterieur: 122
    },
    {
      equipeDomicile: "Seattle Storm",
      scoreDomicile: 45,
      equipeExterieur: "Las Vegas Aces",
      scoreExterieur: 41
    },
  ]
  constructor(public route: Router) {
  }

  ngOnInit(): void {

  }
}