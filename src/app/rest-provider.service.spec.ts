import { TestBed } from '@angular/core/testing';

import { RestProviderService } from './rest-provider.service';

describe('RestProviderService', () => {
  let service: RestProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
