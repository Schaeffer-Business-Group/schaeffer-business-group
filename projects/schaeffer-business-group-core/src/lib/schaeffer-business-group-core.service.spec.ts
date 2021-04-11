import { TestBed } from '@angular/core/testing';

import { SchaefferBusinessGroupCoreService } from './schaeffer-business-group-core.service';

describe('SchaefferBusinessGroupCoreService', () => {
  let service: SchaefferBusinessGroupCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchaefferBusinessGroupCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
