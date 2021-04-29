import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CalendrierClassementService {
  // Clef API
  private apiKey: string = '809b1b3984msh5cad78e9d46098cp169266jsn5b658a9d25d6'

  //  Url de l'api
  private url: string = 'https://api-football-v1.p.rapidapi.com/v3/';

  // Endpoint temporaire
  private options: string

  // Parametres de l'header (renseignement de la clef API & dans de dans quelle API on tape)
  private headerOpt = {
    "x-rapidapi-key": this.apiKey,
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
  }

  // On fout le header dans les parametres dans le truc
  private reqOpt = {
    headers: new HttpHeaders(this.headerOpt),
  }
  constructor(private http: HttpClient) {
  }

  // Methode pour avoir le classement
  getStanding(): Observable<any> {
    this.options = 'standings?season=2020&league=64'
    // GET de la reponse
    const standingResponse: Observable<any> = this.http.get(`${this.url}${this.options}`, this.reqOpt);
    // On va chopper exactement ce que l'on veut
    const truc = (param_data: any) => {
      return param_data.response[0].league.standings[0] as Object
    };
    return standingResponse.pipe(map(truc))
  }

  // Methode pour avoir le calendrier
  getCalendar(): Observable<any> {
    this.options = 'fixtures?date=2021-04-13&league=64&season=2020'
    // GET de la réponse
    const calendarResponse: Observable<any> = this.http.get(`${this.url}${this.options}`, this.reqOpt)
    // On va chopper exactement ce que l'on veut
    const selectedData = (param_data: any) => {
      return param_data.response as Object
    };
    return calendarResponse.pipe(map(selectedData))
  }
}
