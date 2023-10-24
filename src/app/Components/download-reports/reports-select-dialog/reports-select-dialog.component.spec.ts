import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSelectDialogComponent } from './reports-select-dialog.component';

describe('ReportsSelectDialogComponent', () => {
  let component: ReportsSelectDialogComponent;
  let fixture: ComponentFixture<ReportsSelectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsSelectDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
