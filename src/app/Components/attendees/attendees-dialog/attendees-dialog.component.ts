import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AttendeesFormDialogComponent } from '../attendees-form-dialog/attendees-form-dialog.component';
export interface PeriodicElement {
  no:number;
  n19:number;
  sid: string;
  firstName: string;
  lastName: string;
  email:string;
  clockIn:string;
  clockOut:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {no:1,n19:919614507,sid: "S546911", firstName: 'sai Kumar', lastName: "reddy", email: 'sai@nwmissouri.edu',clockIn:"2023-06-10T14:22:18Z" , clockOut:'2023-06-10T14:22:18Z'},
  {no:2,n19:919614508,sid: "S546912", firstName: 'vikas', lastName:"reddy", email: 'vikas@nwmissouri.edu',clockIn:'2023-06-10T14:22:18Z' , clockOut:'2023-06-10T14:22:18Z'},
  {no:3,n19:919614511,sid: "S546913", firstName: 'varsha', lastName:"gajula", email: 'varsha@nwmissouri.edu',clockIn:'2023-06-10T14:22:18Z' , clockOut:'2023-06-10T14:22:18Z'},
  {no:4,n19:919613689,sid: "S546914", firstName: 'sumanth', lastName:"poduri", email: 'sumanth@nwmissouri.edu',clockIn:'2023-06-10T14:22:18Z' , clockOut:'2023-06-10T14:22:18Z'},
  {no:5,n19:919644789,sid: "S546915", firstName: 'harshitha', lastName:"rakasi", email: 'harshitha@nwmissouri.edu',clockIn:'2023-06-10T14:22:18Z' , clockOut:'2023-06-10T14:22:18Z'},
];
@Component({
  selector: 'app-attendees-dialog',
  templateUrl: './attendees-dialog.component.html',
  styleUrls: ['./attendees-dialog.component.scss']
})
export class AttendeesDialogComponent implements AfterViewInit{
  @ViewChild(MatSort) sort: MatSort | any;
  displayedColumns: string[] = ['no','n19','sid', 'firstName', 'lastName', 'email','clockIn','clockOut'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);  
  constructor(public dialog: MatDialog){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openEditDialog(row:PeriodicElement) {
    console.log('Row clicked', row);
    const dialog = this.dialog.open(AttendeesFormDialogComponent, {
      width: '500px',
      // Can be closed only by clicking the close button
      disableClose: true,
      data: row
    });
  }
  openPostAttendance(){
    const dialog = this.dialog.open(AttendeesFormDialogComponent, {
      width: '500px',
      
    });
    dialog.afterClosed().subscribe(data => {
    
      this.dataSource = data.value
      console.log(data.value);
      
      
    });
  
  }
}
