import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AttendeesDialogComponent } from '../attendees-dialog/attendees-dialog.component';

@Component({
  selector: 'app-attendees-form-dialog',
  templateUrl: './attendees-form-dialog.component.html',
  styleUrls: ['./attendees-form-dialog.component.scss']
})
export class AttendeesFormDialogComponent implements OnInit {
    constructor(
      public dialogRef: MatDialogRef<AttendeesDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
  
  
    ngOnInit() {
      console.log('Dialog got', this.data);
    }
  
    closeDialog() {
      this.dialogRef.close();
    }
  }
  
