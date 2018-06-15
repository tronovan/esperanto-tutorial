import { TestBed, inject } from '@angular/core/testing';

import { SimplewordsService } from './simplewords.service';

describe('SimplewordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimplewordsService]
    });
  });

  it('should be created', inject([SimplewordsService], (service: SimplewordsService) => {
    expect(service).toBeTruthy();
  }));
});
