import { TestBed } from '@angular/core/testing';

import { TrainLandingService } from './train-landing.service';

describe('TrainLandingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainLandingService = TestBed.get(TrainLandingService);
    expect(service).toBeTruthy();
  });
});
