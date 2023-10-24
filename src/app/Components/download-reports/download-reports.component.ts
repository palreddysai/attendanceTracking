import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventsService } from 'src/app/shared/events/events.service';
import { ReportsDialogComponent } from './reports-dialog/reports-dialog.component';

@Component({
  selector: 'app-download-reports',
  templateUrl: './download-reports.component.html',
  styleUrls: ['./download-reports.component.scss']
})
export class DownloadReportsComponent implements OnInit {
  public events:any = [];
  privateEvents:any = [];
  publicEvents:any = [];
  currentUser;
  userName: string = "";
  yesterday = new Date();
  constructor(private _events:EventsService,public dialog: MatDialog){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUser.forEach((element:any) => {
      this.userName = element.firstName;
      // console.log(element.firstName);
      
    });
    this.yesterday.setDate(this.yesterday.getDate() - 0);
  }  
  ngOnInit(){
    this._events.getEvents()
    .subscribe(data => {
     this.events = data ;
     // console.log("the events",this.events) ;
     this.events.forEach((e:any) => {
      if(e.createdBy == this.userName){
       this.privateEvents.push(e)
      }
     }); 
     } );
  
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(ReportsDialogComponent,{
      width: "80%",
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
