import { TestBed } from '@angular/core/testing';

import { CalculatorLibService } from './calculator-lib.service';

describe('CalculatorLibService', () => {
  let service: CalculatorLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
