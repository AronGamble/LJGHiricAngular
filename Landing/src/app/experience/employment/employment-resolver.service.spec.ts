import { TestBed } from '@angular/core/testing';

import { EmploymentResolverService } from './employment-resolver.service';

describe('EmploymentResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmploymentResolverService = TestBed.get(EmploymentResolverService);
    expect(service).toBeTruthy();
  });
});
