import { TestBed, inject } from '@angular/core/testing';

import { HyperledgerService } from './hyperledger.service';

describe('HyperledgerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HyperledgerService]
    });
  });

  it('should be created', inject([HyperledgerService], (service: HyperledgerService) => {
    expect(service).toBeTruthy();
  }));
});
