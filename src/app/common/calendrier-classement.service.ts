import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FiltersService } from './filters.service';
@Injectable({
  providedIn: 'root'
})
export class CalendrierClassementService {
  // Clef API Maxime
  private apiKey: string = 'e12317ed8amsh4236a63b97b2a09p193b59jsnd930cc5f007b'

  //  Url de l'API
  private urls: string[] = ['https://api-football-v1.p.rapidapi.com/v3/', 'https://api-basketball.p.rapidapi.com/']
  // Host de l'API
  private hosts: string[] = ['api-football-v1.p.rapidapi.com', 'api-basketball.p.rapidapi.com']

  // Endpoint variable
  public options: string = 'standings?season=2020&league=69'
  public headerOpt
  public reqOpt
  public url: string
  public host: string
  public seasonOptions: string
  public calendarOption: string


  constructor(private http: HttpClient, private filtersService: FiltersService, private router: Router) {
    // Check l'url et modifie les variables de query à l'arrivée sur le site 
    this.sportCheck()

    // Parametres de l'header (renseignement de la clef API + emplacement de l'API)
    this.headerOpt = {
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-host": this.host
    }

    // Creation d'un HttpHeaders avec les informations renseignées precedement
    this.reqOpt = {
      headers: new HttpHeaders(this.headerOpt),
    }
  }

  // Appel API qui GET le classement
  getStanding(): Observable<any> {
    // Spécification que ce qu'on veut récuperer 
    this.options = `standings?season=${this.seasonOptions}&league=${this.filtersService.selectedLeague}`
    // GET de la reponse
    const standingResponse: Observable<any> = this.http.get(`${this.url}${this.options}`, this.reqOpt);
    // On vient récuperer seulement ce que l'on souhaite (uniquement le standing)
    const selectedData = (param_data: any) => {
      return param_data.response[0] as Object
    };
    return standingResponse.pipe(map(selectedData))
  }

  // Appel API qui GET les matches pour un jour précis
  getCalendar(): Observable<any> {
    // Spécification de ce que l'on veut récuperer
    this.options = `${this.calendarOption}?date=${this.filtersService.userDate}&league=${this.filtersService.selectedLeague}&season=${this.seasonOptions}`
    // GET de la réponse
    const calendarResponse: Observable<any> = this.http.get(`${this.url}${this.options}`, this.reqOpt)
    // On vient récuperer seulement ce que l'on souhaite (tout en l'occurrence)
    const selectedData = (param_data: any) => {
      return param_data.response as Object
    };
    return calendarResponse.pipe(map(selectedData))
  }

  // Changement des variables en fonction de l'url + Initialisation des valeurs à l'arrivée du site
  sportCheck() {
    if (this.router.url.includes('/footbal')) {
      this.filtersService.selectedLeague = '64'
      this.filtersService.userDate = '2021-05-01'
      this.url = this.urls[0]
      this.host = this.hosts[0]
      this.calendarOption = 'fixtures'
      this.seasonOptions = '2020'
    }
    else if (this.router.url.includes('/basketball')) {
      this.filtersService.selectedLeague = '10'
      this.filtersService.userDate = '2021-04-27'
      this.url = this.urls[1]
      this.host = this.hosts[1]
      this.calendarOption = 'games'
      this.seasonOptions = '2020-2021'
    }
    this.headerOpt = {
      // Parametres de l'header (renseignement de la clef API + emplacement de l'API)
      "x-rapidapi-key": this.apiKey,
      "x-rapidapi-host": this.host
    }

    // Recréation du HttpHeaders avec les informations renseignées precedement
    this.reqOpt = {
      headers: new HttpHeaders(this.headerOpt),
    }
  }
  // Verifie sur l'utilisateur a bien selectionné un pays avant de selectionner une ligue
  checkIfCountryEmpty(country) {
    if (country === '') {
      alert('Merci de d\'abord selectionner un pays')
    }
  }
}
