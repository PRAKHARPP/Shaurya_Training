import { TestBed } from '@angular/core/testing';

import { Disp1Data1Service } from './disp1-data1.service';

describe('Disp1Data1Service', () => {
  let service: Disp1Data1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Disp1Data1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
