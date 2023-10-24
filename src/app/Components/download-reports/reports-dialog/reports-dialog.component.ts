import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReportsSelectDialogComponent } from '../reports-select-dialog/reports-select-dialog.component';
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
  // {no:6,n19:919605661,sid: "S546916", firstName: 'Carbon', lastName: "", email: 'C',clockIn:'' , clockOut:''},
  // {no:7,n19:919614551,sid: "S546917", firstName: 'Nitrogen', lastName: "", email: 'N',clockIn:'' , clockOut:''},
  // {no:8,n19:919614568,sid: "S546918", firstName: 'Oxygen', lastName: "", email: 'O',clockIn:'' , clockOut:''},
  // {no:9,n19:919614825,sid: "S546919", firstName: 'Fluorine', lastName:"", email: 'F',clockIn:'' , clockOut:''},
  // {no:10,n19:919618465,sid: "S546910", firstName: 'Neon', lastName: "", email: 'Ne',clockIn:'' , clockOut:''},
];
@Component({
  selector: 'app-reports-dialog',
  templateUrl: './reports-dialog.component.html',
  styleUrls: ['./reports-dialog.component.scss']
})
export class ReportsDialogComponent implements AfterViewInit{
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
  openSelectReportsDialog() {
    const dialogRef = this.dialog.open(ReportsSelectDialogComponent,{
      width: "20%",
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
