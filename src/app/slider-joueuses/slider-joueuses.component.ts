import { Component, OnInit } from '@angular/core';
import { Joueuse } from '../common/joueuse';
import { JoueusesSliderService } from '../joueuses-slider.service';

@Component({
  selector: 'app-slider-joueuses',
  templateUrl: './slider-joueuses.component.html',
  styleUrls: ['./slider-joueuses.component.css']
})
export class SliderJoueusesComponent implements OnInit {

  public joueuses: Joueuse[]

  constructor(public JoueusesSliderService:JoueusesSliderService) { }

 

  ngOnInit(): void {
    this.joueuses = this.JoueusesSliderService.getJoueuses();
  }


}

