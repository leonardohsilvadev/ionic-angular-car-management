import { TestBed } from '@angular/core/testing';

import { CarrosService } from './carros.service';

describe('CarrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrosService = TestBed.get(CarrosService);
    expect(service).toBeTruthy();
  });
});
