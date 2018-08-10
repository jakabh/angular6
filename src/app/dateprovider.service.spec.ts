import { TestBed, inject } from '@angular/core/testing';

import { DateproviderService } from './dateprovider.service';

describe('DateproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateproviderService]
    });
  });

  it('should be created', inject([DateproviderService], (service: DateproviderService) => {
    expect(service).toBeTruthy();
  }));
});
