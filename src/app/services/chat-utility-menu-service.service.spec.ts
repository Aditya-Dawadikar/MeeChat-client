import { TestBed } from '@angular/core/testing';

import { ChatUtilityMenuServiceService } from './chat-utility-menu-service.service';

describe('ChatUtilityMenuServiceService', () => {
  let service: ChatUtilityMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatUtilityMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
