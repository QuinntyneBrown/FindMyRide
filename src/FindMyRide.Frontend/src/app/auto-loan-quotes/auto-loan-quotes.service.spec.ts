import { TestBed } from '@angular/core/testing';

import { AutoLoanQuotesService } from './auto-loan-quotes.service';

describe('AutoLoanQuotesService', () => {
  let service: AutoLoanQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLoanQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
