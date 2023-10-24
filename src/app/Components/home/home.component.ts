import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   public events:any = [];
   constructor(private _events:EventsService){
    
   }

   ngOnInit(){
    this._events.getEvents()
    .subscribe(data => this.events = data);
    console.log(`events ${this.events}`);
    
  }
}