import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarFriendComponent } from './top-bar-friend.component';

describe('TopBarFriendComponent', () => {
  let component: TopBarFriendComponent;
  let fixture: ComponentFixture<TopBarFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
