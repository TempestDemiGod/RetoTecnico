import { TestBed } from '@angular/core/testing';

import { CountrysServiceService } from './countrys-service.service';

describe('CountrysServiceService', () => {
  let service: CountrysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
