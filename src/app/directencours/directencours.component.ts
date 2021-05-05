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

  // j'indique la clé API utilisée
  headerOptions = {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "58c69161d2msh3de4f5b3da8ae42p1ad5c9jsn3f8a6a46fd01"
	}
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerOptions), 
  };

  public listScore: any = [];
  private url:string = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all"
  public listePays: string[] = [];
  public resultPays: string;

  public matchDirect: MatchDirect[];
  public matchListFrance: MatchDirect[] = [];

  constructor(public service: ScoredirectService, private http : HttpClient) { 
    this.service = service;

  }

ngOnInit(): void {
/* this.service.getScore().subscribe((url) =>{ 
    this.listScore=url;
    console.log(this.listScore)
})*/ 
this.listePays.push("France", "Espagne", "USA",)

};

getMatchDirectFrance() {
  return this.matchListFrance;
}

getResultbyCountry(index:number) {
  alert("this.getResultbyCountry")
  this.resultPays = this.listePays[index];
  console.log(this.listePays[index])

/*

   else if(this.listePays[1] === "Espagne"){
   observable  = this.service.get(this.url+"&league=142",this.requestOptions);
  }
  else if(this.listePays[2] === "USA"){
   observable  = this.service.get(this.url+"&league=254&league=641",this.requestOptions);
  }
  else if(this.listePays[3] === "Allemagne"){
   observable  = this.service.get(this.url+"&league=82",this.requestOptions);
  }
  else if(this.listePays[4] === "Angleterre"){
   observable  = this.service.get(this.url+"&league=44",this.requestOptions);
  }
  else if(this.listePays[5] === "Italie"){
   observable  = this.service.get(this.url+"&league=139",this.requestOptions);
}*/
}

}