import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScoredirectService {


   headerOptions = {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "a7b168d2f0mshc58fd9237a3b553p117d2fjsn2325ed2daeab"
	}
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerOptions), 
  };


  url:string = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&league=64 "
  private stockage : HttpClient;

  constructor(private service : HttpClient) { 
    this.stockage = service;
  }

    public getScore():Observable<any>{
    const observable : Observable<any> = this.stockage.get(this.url,this.requestOptions)
    const traitement = (data:any) => {return data.response as Object}
    return observable.pipe(map(traitement));
  }
}
