import { TestBed } from '@angular/core/testing';

import { RigService } from './rig.service';

describe('RigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RigService = TestBed.get(RigService);
    expect(service).toBeTruthy();
  });
});
