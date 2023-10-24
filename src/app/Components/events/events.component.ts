import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events/events.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { EventsFormComponent } from './events-form/events-form.component';
import * as e from 'express';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  public events:any = [];
  privateEvents:any = [];
  publicEvents:any = [];
  currentUser;
  confirmDelete:boolean = false;
  constructor(private _events:EventsService,public dialog: MatDialog){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log("event 1",this.events);

  }  
  ngOnInit(){
    this.getEvent();
 }
 getEvent(){
  this._events.getEvents().subscribe(data => {
    this.events = data ;
    console.log("the events",this.events) ;
    this.events.forEach((e:any) => {
     if(e.eventType == 'Private' && e.createdBy == "Sai Kumar"){
      this.privateEvents.push(e)
    // console.log("the events",this.currentUser.firstName) ;

     }
     else if(e.eventType == 'Public' && e.createdBy == "Sai Kumar"){
     this.publicEvents.push(e)
     }
    }); 
    } );
    
 }
 openDialog(): void {
  const dialogRef = this.dialog.open(EventsFormComponent, {
    width: '500px',
    data: [{}]
  });

  dialogRef.afterClosed().subscribe(data => {
    
    // console.log("data",data.value);
    if(data.value.eventType == "Private"){
      this.privateEvents.push(data.value);
    }
    else{
      this.publicEvents.push(data.value);
    }
    // this.events = data
    

  });
}
//  edit(e:any){
//   this.openDialog(e)  
//  }
editOpenDialog(e: any) {
  console.log('Row clicked', e);

  const dialog = this.dialog.open(EventsFormComponent, {
    width: '500px',
    // Can be closed only by clicking the close button
    disableClose: true,
    data: e
  });
  dialog.afterClosed().subscribe(updatedData => {
  this.events = [updatedData.value]
    console.log("events after close",this.events);
  });
}

////
 deletePrivateEvent(index:any) {
  this.confirmDelete = confirm("Are you sure to delete the record ?");
  if(this.confirmDelete == true)
    this.privateEvents.splice(index, 1);
  else
    alert("Okay");
  
 
}
deletePublicEvent(index:any) {
  
  this.publicEvents.splice(index, 1);
 
}
}
