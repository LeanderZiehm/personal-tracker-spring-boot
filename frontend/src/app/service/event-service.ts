import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EventModel } from '../models/event-model';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  private http = inject(HttpClient);
  // private BASE_URL = "https://tracker-api.leanderziehm.com/events";
  private BASE_URL = "https://tracker-api.leanderziehm.com/";
  private PATH = "events";
  private URL = this.BASE_URL + this.PATH;

  getEvents(){
   return this.http.get<EventModel>(this.URL);
  }

  addEvent(event:EventModel){
    return this.http.post<EventModel[]>(this.URL,event);
  }
  
}
