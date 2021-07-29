import { Component, OnInit } from '@angular/core';
import { CalendarInfo } from './models/calendarInfo.model';
import { CalendarObj } from './models/calendarObj.model';
import { CalendarService } from './services/calendar/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  calendarInfo: CalendarInfo
  dateFormated: string
  startDate: Date

  constructor( private calendarService: CalendarService ) { }

  ngOnInit() {
    this.gettingCalendar()
  }
  
  gettingCalendar() {
    this.calendarService.getCalendarInfo('info', 'https://calendar.time.ly/6a37fb6n')
      .subscribe((data: CalendarObj) => {
        this.calendarInfo = data.data
        this.dateFormated = ''
      })
  }

  clearDate(event: Event) {
    event.stopPropagation()
    this.dateFormated = ''
    this.startDate = null
  }

  changingDate(value: Date) {
    if (value) {
      this.dateFormated = this.formatDate(value)
    } else {
      this.dateFormated = ''
    }
  }

  formatDate(date: Date): string {
    return this.pad(date.getFullYear()) + 
      '-' + this.pad((date.getMonth() + 1)) + 
      '-' + this.pad(date.getDate())
  }

  pad(number: Number): string {
    if (number < 10) {
      return '0' + number;
    }

    return number.toString();
  }
}
