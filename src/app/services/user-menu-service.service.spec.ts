import { TestBed } from '@angular/core/testing';

import { UserMenuServiceService } from './user-menu-service.service';

describe('UserMenuServiceService', () => {
  let service: UserMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
