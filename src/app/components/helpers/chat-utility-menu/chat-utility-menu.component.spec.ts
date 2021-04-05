import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUtilityMenuComponent } from './chat-utility-menu.component';

describe('ChatUtilityMenuComponent', () => {
  let component: ChatUtilityMenuComponent;
  let fixture: ComponentFixture<ChatUtilityMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatUtilityMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUtilityMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
