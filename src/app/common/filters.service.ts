import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  // Liste des ligues dans le select
  leagueFilter: []
  // Ligue selectionnée par l'utilisateur
  selectedLeague: string = ''
  // Date selectionné par l'utilisateur
  userDate: string

  constructor(private service: HttpClient, private datePipe: DatePipe) { }

  // Get JSON avec les ligues et pays
  public getLeagues(): Observable<any> {
    const obsLeagues: Observable<any> = this.service.get('assets/filters.json')
    const leagues = (data) => { return data as Object }
    return obsLeagues.pipe(map(leagues))
  }
  // Change le filtre ligue en fonction du pays selectionné
  getCountry(leagueFilter, selectedCountry) {
    // Réinitialisation du filtre des ligues
    leagueFilter = []
    leagueFilter.push(selectedCountry)
    this.leagueFilter = leagueFilter
    // Reset de la ligue selectionnée
    this.selectedLeague = ''
  }

  getInfos(selectedLeague: string) {
    this.selectedLeague = selectedLeague
  }

  getDate(date: Date) {
    // Changement du format de la date pour la requette API
    this.userDate = this.datePipe.transform(date, 'yyyy-MM-dd')
  }

}
