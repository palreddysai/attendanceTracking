import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ievents } from './events';
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _url: string = "../../../assets/data/events.json";
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Ievents[]>{
    console.log("entering");
    return this.http.get<Ievents[]>(this._url);
    
  }
}
