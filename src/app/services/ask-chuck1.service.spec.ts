import { TestBed } from '@angular/core/testing';

import { AskChuck1Service } from './ask-chuck1.service';

describe('AskChuck1Service', () => {
  let service: AskChuck1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskChuck1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
