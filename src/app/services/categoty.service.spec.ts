import { TestBed, inject } from '@angular/core/testing';

import { CategotyService } from './categoty.service';

describe('CategotyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategotyService]
    });
  });

  it('should be created', inject([CategotyService], (service: CategotyService) => {
    expect(service).toBeTruthy();
  }));
});
