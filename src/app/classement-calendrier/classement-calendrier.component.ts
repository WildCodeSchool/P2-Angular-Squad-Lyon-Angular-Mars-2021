import { Component, OnInit } from '@angular/core';


export interface ClassementElement {
  P: number;
  CLUBS: string;
  PTS: number;
  J: number;
  DIFF: number;
}

@Component({
  selector: 'app-classement-calendrier',
  templateUrl: './classement-calendrier.component.html',
  styleUrls: ['./classement-calendrier.component.css']
})
export class ClassementCalendrierComponent implements OnInit {

  ELEMENT_DATA: ClassementElement[] = [
    {P: 1, CLUBS: 'PSG', PTS: 14, J: 32, DIFF: +14},
    {P: 1, CLUBS: 'PSG', PTS: 14, J: 32, DIFF: +14},
    {P: 1, CLUBS: 'PSG', PTS: 14, J: 32, DIFF: +14},
    {P: 1, CLUBS: 'PSG', PTS: 14, J: 32, DIFF: +14},
    {P: 1, CLUBS: 'PSG', PTS: 14, J: 32, DIFF: +14},

];

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['P', 'CLUBS', 'PTS', 'J', 'DIFF'];
  dataSource = this.ELEMENT_DATA;

}
