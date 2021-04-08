import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpContainerComponent } from './pop-up-container.component';

describe('PopUpContainerComponent', () => {
  let component: PopUpContainerComponent;
  let fixture: ComponentFixture<PopUpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
