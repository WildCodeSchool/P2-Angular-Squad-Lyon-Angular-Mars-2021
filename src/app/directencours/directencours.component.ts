import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatchDirect } from '../common/match.model';
import { ScoredirectService } from '../common/scoredirect.service';


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

  constructor() {
  }

ngOnInit(): void {
 
}
}