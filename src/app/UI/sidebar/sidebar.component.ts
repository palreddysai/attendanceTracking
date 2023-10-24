import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navList:any = [
    {navBarItem:"View Dashboard",routerLink:"/home"},
    {navBarItem:"My Events",routerLink:"/events"},
    {navBarItem:"Attendance",routerLink:"/manageAttendees"},
    {navBarItem:"Generate Report",routerLink:"/downloadReport"},
    {navBarItem:"Create Certificate",routerLink:"/createCertificate"},
    {navBarItem:"My Profile",routerLink:"/myprofile"},

  ]
  
}
