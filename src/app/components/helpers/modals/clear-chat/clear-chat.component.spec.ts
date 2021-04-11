import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearChatComponent } from './clear-chat.component';

describe('ClearChatComponent', () => {
  let component: ClearChatComponent;
  let fixture: ComponentFixture<ClearChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
