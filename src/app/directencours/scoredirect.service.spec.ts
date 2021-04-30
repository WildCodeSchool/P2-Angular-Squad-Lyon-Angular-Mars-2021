import { TestBed } from '@angular/core/testing';

import { ScoredirectService } from './scoredirect.service';

describe('ScoredirectService', () => {
  let service: ScoredirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoredirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
