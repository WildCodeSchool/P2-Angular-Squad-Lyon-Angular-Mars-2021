  // les imports//
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchDirect } from '../common/match.model';

 // Déclaration variables //
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

  // Jeu de données//
  matchListFrance: MatchDirect[] = [
    {
      equipeDomicile: "PSG",
      scoreDomicile: 1,
      equipeExterieur: "Soyaux",
      scoreExterieur: 4
    },
    {
      equipeDomicile: "EAG",
      scoreDomicile: 1,
      equipeExterieur: "Le HAC",
      scoreExterieur: 3
    },
    {
      equipeDomicile: "OL",
      scoreDomicile: 3,
      equipeExterieur: "MHSC",
      scoreExterieur: 2
    },
  ]

  matchListBasketFrance: MatchDirect[] = [
    {
      equipeDomicile: "FC",
      scoreDomicile: 93,
      equipeExterieur: "Lyon",
      scoreExterieur: 121
    },
    {
      equipeDomicile: "ASCQ",
      scoreDomicile: 77,
      equipeExterieur: "MHSC",
      scoreExterieur: 83
    },
    {
      equipeDomicile: "VENDEE",
      scoreDomicile: 82,
      equipeExterieur: "LANDES",
      scoreExterieur: 85
    },
  ]

  matchListBasketItalie: MatchDirect[] = [
    {
      equipeDomicile: "Venezia",
      scoreDomicile: 34,
      equipeExterieur: "Costa.M",
      scoreExterieur: 57
    },
    {
      equipeDomicile: "Bologna F",
      scoreDomicile: 24,
      equipeExterieur: "San.G F",
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
      equipeDomicile: "JFC",
      scoreDomicile: 1,
      equipeExterieur: "FBC",
      scoreExterieur: 2
    },
    {
      equipeDomicile: "AC.M",
      scoreDomicile: 3,
      equipeExterieur: "Bari",
      scoreExterieur: 4
    },
    {
      equipeDomicile: "AS Roma",
      scoreDomicile: 1,
      equipeExterieur: "ACF",
      scoreExterieur: 2
    },
  ]
  matchListUsa: MatchDirect[] = [
    {
      equipeDomicile: "Chigaco",
      scoreDomicile: 3,
      equipeExterieur: "Denver",
      scoreExterieur: 0
    },
    {
      equipeDomicile: "Houston",
      scoreDomicile: 2,
      equipeExterieur: "Miami",
      scoreExterieur: 1
    },
    {
      equipeDomicile: "Reign",
      scoreDomicile: 0,
      equipeExterieur: "Gotham",
      scoreExterieur: 3
    },
  ]

  matchListBasketUsa: MatchDirect[] = [
    {
      equipeDomicile: "Dallas Wings",
      scoreDomicile: 63,
      equipeExterieur: "Utah",
      scoreExterieur: 98
    },
    {
      equipeDomicile: "L.A Sparks",
      scoreDomicile: 73,
      equipeExterieur: "Sky",
      scoreExterieur: 122
    },
    {
      equipeDomicile: "Storm",
      scoreDomicile: 45,
      equipeExterieur: "Aces",
      scoreExterieur: 41
    },
  ]
 // J'instancie la variable de Router//
  constructor(public route: Router) {
  }

  ngOnInit(): void {

  }
}