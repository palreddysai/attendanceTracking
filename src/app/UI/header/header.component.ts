import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentUser:any;
constructor(){
  // this.userName = localStorage.getItem('userName');
  this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  console.log(this.currentUser,"user");
  
}
}
