import { TestBed } from '@angular/core/testing';

import { NgFilterSelectService } from './ng-filter-select.service';

describe('NgFilterSelectService', () => {
  let service: NgFilterSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFilterSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
