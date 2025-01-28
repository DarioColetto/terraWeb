import { TestBed } from '@angular/core/testing';

import { TitlevisibleService } from './titlevisible.service';

describe('TitlevisibleService', () => {
  let service: TitlevisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitlevisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
