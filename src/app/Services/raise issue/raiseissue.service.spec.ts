import { TestBed } from '@angular/core/testing';

import { RaiseissueService } from './raiseissue.service';

describe('RaiseissueService', () => {
  let service: RaiseissueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaiseissueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
