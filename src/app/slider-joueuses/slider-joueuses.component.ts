import { Component, OnInit } from '@angular/core';
import { Joueuse } from '../common/joueuse';
import { JoueusesSliderService } from '../common/joueuses-slider.service';

@Component({
  selector: 'app-slider-joueuses',
  templateUrl: './slider-joueuses.component.html',
  styleUrls: ['./slider-joueuses.component.css']
})
export class SliderJoueusesComponent implements OnInit {

  public joueuses: Joueuse[]

  constructor(public JoueusesSliderService: JoueusesSliderService) { }



  ngOnInit(): void {
    // On remplit le tableau "joueuses" avec les données du service au moyen de la méthode getJoueuses"
    this.joueuses = this.JoueusesSliderService.getJoueuses();
  }


}

