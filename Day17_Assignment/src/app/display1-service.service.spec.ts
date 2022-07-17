import { TestBed } from '@angular/core/testing';

import { Display1ServiceService } from './display1-service.service';

describe('Display1ServiceService', () => {
  let service: Display1ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Display1ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
