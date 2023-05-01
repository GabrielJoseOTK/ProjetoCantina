import { TestBed } from '@angular/core/testing';

import { DonoserviceService } from './donoservice.service';

describe('DonoserviceService', () => {
  let service: DonoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
