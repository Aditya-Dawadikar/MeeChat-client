import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProfileViewerComponent } from './mini-profile-viewer.component';

describe('MiniProfileViewerComponent', () => {
  let component: MiniProfileViewerComponent;
  let fixture: ComponentFixture<MiniProfileViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniProfileViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProfileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
