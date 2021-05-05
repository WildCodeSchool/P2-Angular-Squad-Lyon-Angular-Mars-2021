import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membre } from './membre.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MembresService {

  constructor(private http: HttpClient) { }
  public getMembers(): Observable<any> {
    const membersObs: Observable<any> = this.http.get('assets/membres.json')
    const membersList = (members) => { return members as Membre[] }
    return membersObs.pipe(map(membersList))
  }
}
