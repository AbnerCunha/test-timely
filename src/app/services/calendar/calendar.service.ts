import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private baseService: BaseService) { }

  getCalendarInfo(endpoint: string, url: string) {
    const params = new HttpParams().set('url', url)

    return this.baseService.post(endpoint, params)
  }

  getCalendarEvents(id: number, endpoint: string) {
    return this.baseService.get(id + '/' + endpoint)
  }
}
