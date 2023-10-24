import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { CreateCertificateComponent } from './components/create-certificate/create-certificate.component';
import { DownloadReportsComponent } from './components/download-reports/download-reports.component';
import { EventsComponent } from './Components/events/events.component';
import { HomeComponent } from './Components/home/home.component';
import { Page404Component } from './Components/page404/page404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginPageComponent } from './UI/login-page/login-page.component';
import { MainComponent } from './UI/main/main.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginPageComponent},
  {path:'', component:MainComponent, children:[
    {path:'',redirectTo:"/home", pathMatch:"full"},
    {path:'home', component:HomeComponent},
    {path:'events', component:EventsComponent},
    {path:'downloadReport', component:DownloadReportsComponent},
    {path:'myprofile', component:ProfileComponent},
    {path:'createCertificate', component:CreateCertificateComponent},
    {path:'manageAttendees', component:AttendeesComponent},

  ]},  
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
