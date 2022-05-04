import { TestBed } from '@angular/core/testing';


import { RegistrationDetailService } from './registration-details';

describe('RegistrationDetails', () => {
  let service: RegistrationDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
