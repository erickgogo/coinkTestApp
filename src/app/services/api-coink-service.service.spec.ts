import { TestBed } from '@angular/core/testing';

import { ApiCoinkServiceService } from './api-coink-service.service';

describe('ApiCoinkServiceService', () => {
  let service: ApiCoinkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCoinkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
