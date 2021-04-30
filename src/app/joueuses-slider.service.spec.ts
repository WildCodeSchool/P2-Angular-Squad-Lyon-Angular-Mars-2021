import { TestBed } from '@angular/core/testing';

import { JoueusesSliderService } from './joueuses-slider.service';

describe('JoueusesSliderService', () => {
  let service: JoueusesSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoueusesSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
