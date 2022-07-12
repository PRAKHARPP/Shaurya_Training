import { TestBed } from '@angular/core/testing';

import { Disp1Data2Service } from './disp1-data2.service';

describe('Disp1Data2Service', () => {
  let service: Disp1Data2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Disp1Data2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
