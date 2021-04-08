import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareWithFriendsComponent } from './share-with-friends.component';

describe('ShareWithFriendsComponent', () => {
  let component: ShareWithFriendsComponent;
  let fixture: ComponentFixture<ShareWithFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareWithFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareWithFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
