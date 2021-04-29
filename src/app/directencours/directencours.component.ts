import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
