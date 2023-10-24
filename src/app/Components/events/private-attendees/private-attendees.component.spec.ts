import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateAttendeesComponent } from './private-attendees.component';

describe('PrivateAttendeesComponent', () => {
  let component: PrivateAttendeesComponent;
  let fixture: ComponentFixture<PrivateAttendeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateAttendeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
