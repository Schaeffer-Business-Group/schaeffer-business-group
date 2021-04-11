import { TestBed } from '@angular/core/testing';

import { SchaefferBusinessGroupService } from './schaeffer-business-group.service';

describe('SchaefferBusinessGroupService', () => {
  let service: SchaefferBusinessGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchaefferBusinessGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
