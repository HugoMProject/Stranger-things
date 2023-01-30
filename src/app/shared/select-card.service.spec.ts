import { TestBed } from '@angular/core/testing';

import { SelectCardService } from './select-card.service';

describe('SelectCardService', () => {
  let service: SelectCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
