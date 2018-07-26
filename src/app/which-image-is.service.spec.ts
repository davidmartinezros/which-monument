import { TestBed, inject } from '@angular/core/testing';

import { WhichImageIsService } from './which-image-is.service';

describe('WhichImageIsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhichImageIsService]
    });
  });

  it('should ...', inject([WhichImageIsService], (service: WhichImageIsService) => {
    expect(service).toBeTruthy();
  }));
});
