import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendeesFormDialogComponent } from './attendees-form-dialog.component';

describe('AttendeesFormDialogComponent', () => {
  let component: AttendeesFormDialogComponent;
  let fixture: ComponentFixture<AttendeesFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendeesFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendeesFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
