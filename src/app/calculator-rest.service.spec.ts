import { TestBed } from '@angular/core/testing';

import { CalculatorRestService } from './calculator-rest.service';

describe('CalculatorRestServiceService', () => {
  let service: CalculatorRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
