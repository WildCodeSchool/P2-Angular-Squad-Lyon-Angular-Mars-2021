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

  private url:string = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all"

  public listePays: string[] = [];

  public dataDirect: string[]


  constructor(private service : HttpClient) { 
    this.service = service;
  }
  


 /* getScore():Observable<any>{
    const observable : Observable<any> = this.service.get(this.url,this.requestOptions)
  const traitement = (data:any) => {return data.response as Object}
  return observable.pipe(map(traitement));
  } */
  
} 