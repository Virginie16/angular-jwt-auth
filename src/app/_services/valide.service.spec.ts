import { TestBed } from '@angular/core/testing';

import { ValideService } from './valide.service';

describe('ValideService', () => {
  let service: ValideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
