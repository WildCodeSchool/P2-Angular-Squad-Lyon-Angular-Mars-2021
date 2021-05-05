import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatchDirect } from './match.model';

@Injectable({
  providedIn: 'root'
})
export class ScoredirectService {

// j'indique la clé API utilisée
   headerOptions = {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "58c69161d2msh3de4f5b3da8ae42p1ad5c9jsn3f8a6a46fd01"
	}
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerOptions), 
  };

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
  equipeDomicile: "Juventus Football Club",
  scoreDomicile: 1,
  equipeExterieur: "FBC",
  scoreExterieur: 2
},
{
  equipeDomicile: "Associazione Calcio Milan",
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

  private url:string = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all"

  public listePays: string[] = [];

  public dataDirect: string[]


  constructor(private service : HttpClient) { 
    this.service = service;
  }
  


  getScore():Observable<any>{
    const observable : Observable<any> = this.service.get(this.url,this.requestOptions)
  const traitement = (data:any) => {return data.response as Object}
  return observable.pipe(map(traitement));
  }
  
} 