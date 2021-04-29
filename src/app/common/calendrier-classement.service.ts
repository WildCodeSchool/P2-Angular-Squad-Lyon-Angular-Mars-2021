import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalendrierClassementService {
  // Clef API
private apiKey: string = '809b1b3984msh5cad78e9d46098cp169266jsn5b658a9d25d6'

//  Url de l'api
private url: string = 'https://api-football-v1.p.rapidapi.com/v3/';

// Endpoint temporaire
private option: string = 'standings?season=2020&league=64'

// Parametres de l'header (renseignement de la clef API & dans de dans quelle API on tape)
private headerOpt = {
  "x-rapidapi-key": this.apiKey,
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
}
private reqOpt 
  constructor(private http: HttpClient) {
    // On fout le header dans les parametres dans le truc
    this.reqOpt = {
        headers: new HttpHeaders(this.headerOpt),
    }
   }

getStanding(): Observable<any>{
  // GET de la reponse
   const response: Observable<any> =  this.http.get(`${this.url}${this.option}`, this.reqOpt);
   // On va chopper exactement ce que l'on veut
   const truc = (param_data: any) =>{
     return param_data.response[0].league.standings[0] as Object
   };
   return response.pipe(map(truc))
}
}
