import { Component,Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Ievents } from 'src/app/shared/events/events';
import { EventsComponent } from '../events.component';
import { PrivateAttendeesComponent } from '../private-attendees/private-attendees.component';
// import { DialogData } from '../form-model';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit{
  @Input() min: any;
  yesterday = new Date();
  eventForm:FormGroup;
  hide = true;
  user:any;
  userName:any;
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<EventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.eventForm = new FormGroup({
          'eventName':new FormControl(null,[Validators.required]),
          'eventDescription':new FormControl(null,[Validators.required]),
          'eventType':new FormControl(null,[Validators.required]),
          'eventSwipeType': new FormControl(),
          'startDate':new FormControl(this.yesterday),
          'endDate':new FormControl(this.yesterday),
          'eventTime': new FormControl(null,Validators.pattern('^[0-9]')),
          'eventBufferTime': new FormControl(),
          'eventLocation':new FormControl(null,[Validators.required]),
          'createdBy':new FormControl("Sai Kumar",[Validators.required]),
      }); 
      this.yesterday.setDate(this.yesterday.getDate() - 0);
       
  }
  ngOnInit(){
     this.editData();
     this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
     this.user.forEach((e:any) => {
      this.userName = e.firstName;
     });
     console.log("user", this.userName);
     
  }
  editData(){
    console.log("eventForm",this.eventForm);
    
  this.eventForm.controls['eventName'].setValue(this.data.eventName);
  this.eventForm.controls['eventDescription'].setValue(this.data.eventDescription);
  this.eventForm.controls['eventType'].setValue(this.data.eventType);
  this.eventForm.controls['eventSwipeType'].setValue(this.data.eventSwipeType);
  this.eventForm.controls['startDate'].setValue(this.data.startDate);
  this.eventForm.controls['endDate'].setValue(this.data.endDate);
  this.eventForm.controls['eventTime'].setValue(this.data.endDate);
  this.eventForm.controls['eventBufferTime'].setValue(this.data.eventBufferTime);
  this.eventForm.controls['eventLocation'].setValue(this.data.eventLocation);
  this.eventForm.controls['createdBy'].setValue(this.data.createdBy);
  }

  onNoClick(): void {
    this.dialogRef.close(this.eventForm);
    console.log("closed update dialog", this.eventForm);
    
  }
  onReset() {
    this.eventForm.reset();
}
openDialog(){
  const dialogRef = this.dialog.open(PrivateAttendeesComponent, {
    // width: '500px',
  });

}
}
