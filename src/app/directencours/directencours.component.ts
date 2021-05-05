import { Component, OnInit } from '@angular/core';
import { ScoredirectService } from './scoredirect.service';

interface Pays {
  value: string;
  viewValue: string;
}

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

  lesPays: Pays[] = [
    { value: 'Angleterre-0', viewValue: 'Angleterre' },
    { value: 'Soudan-1', viewValue: 'Soudan' },
    { value: 'Maroc-2', viewValue: 'Maroc' }
  ];

  public listScore:[]= [];
  public service: ScoredirectService ;

  constructor(service: ScoredirectService){
    this.service = service;
  }

  ngOnInit(): void {
    // this.service.getScore().subscribe((url) =>{this.listScore=url  
      
    
    // }
    
    // )
   
   

}
  
}