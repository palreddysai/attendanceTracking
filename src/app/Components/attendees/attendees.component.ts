import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventsService } from 'src/app/shared/events/events.service';
import { AttendeesDialogComponent } from './attendees-dialog/attendees-dialog.component';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss']
})
export class AttendeesComponent implements OnInit {
  currentUser:any = [];
  public events:any = [];
  privateEvents:any = [];
  publicEvents : any = [];
  userName:String = "";
  constructor(private _events:EventsService, public dialog: MatDialog){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.currentUser.forEach((element:any) => {
      this.userName = element.firstName;
      // console.log(element.firstName);
      
    });
  }

  ngOnInit(){
    this._events.getEvents()
   .subscribe(data => {
    this.events = data ;
    // console.log("the events",this.events) ;
    this.events.forEach((e:any) => {
     if(e.eventType == 'Private' && e.createdBy == "Sai Kumar"){
      this.privateEvents.push(e)
     }
      else if(e.eventType == 'Public' && e.createdBy == "Sai Kumar"){
     this.publicEvents.push(e)
     }
    }); 
    } );
  }
  openDialog() {
    const dialogRef = this.dialog.open(AttendeesDialogComponent,{
      width: "80%",
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }


}
