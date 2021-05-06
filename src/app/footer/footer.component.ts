import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //Définition d'un objet de type date
  
  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
