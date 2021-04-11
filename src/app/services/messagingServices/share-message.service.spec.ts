import { TestBed } from '@angular/core/testing';

import { ShareMessageService } from './share-message.service';

describe('ShareMessageService', () => {
  let service: ShareMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
