import { TestBed } from '@angular/core/testing';

import { PiloteService } from './pilote.service';

describe('StudentService', () => {
  let service: PiloteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiloteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
