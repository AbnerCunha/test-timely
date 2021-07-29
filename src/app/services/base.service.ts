import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CalendarObj } from '../models/calendarObj.model';
import { EventsRequest } from '../models/eventsRequest.model';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url = environment.baseUrl

  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get<EventsRequest>(this.url + endpoint)
  }

  post(endpoint: string, params: HttpParams) {
    return this.http.post<CalendarObj>(this.url + endpoint, params)
  }
}
