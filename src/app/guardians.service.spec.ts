import { TestBed } from '@angular/core/testing';

import { GuardiansService } from './guardians.service';

describe('GuardiansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardiansService = TestBed.get(GuardiansService);
    expect(service).toBeTruthy();
  });
});
