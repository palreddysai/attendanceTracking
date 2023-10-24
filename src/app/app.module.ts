import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/shared/material/angular-material.module';
import { LoginPageComponent } from './UI/login-page/login-page.component';
import { HeaderComponent } from './UI/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { MainComponent } from './UI/main/main.component';
import { HomeComponent } from './Components/home/home.component';
import { Page404Component } from './Components/page404/page404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './Components/events/events.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { DownloadReportsComponent } from './components/download-reports/download-reports.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateCertificateComponent } from './components/create-certificate/create-certificate.component';
import { AttendeesComponent } from './components/attendees/attendees.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsFormComponent } from './Components/events/events-form/events-form.component';
import { AttendeesDialogComponent } from './Components/attendees/attendees-dialog/attendees-dialog.component';
import { ReportsDialogComponent } from './Components/download-reports/reports-dialog/reports-dialog.component';
import { ReportsSelectDialogComponent } from './Components/download-reports/reports-select-dialog/reports-select-dialog.component';
import { AttendeesFormDialogComponent } from './Components/attendees/attendees-form-dialog/attendees-form-dialog.component';
import { PrivateAttendeesComponent } from './Components/events/private-attendees/private-attendees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    Page404Component,
    EventsComponent,
    SidebarComponent,
    DownloadReportsComponent,
    ProfileComponent,
    CreateCertificateComponent,
    AttendeesComponent,
    EventsFormComponent,
    AttendeesDialogComponent,
    ReportsDialogComponent,
    ReportsSelectDialogComponent,
    AttendeesFormDialogComponent,
    PrivateAttendeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
