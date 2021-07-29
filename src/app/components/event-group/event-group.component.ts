import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventsObj } from 'src/app/models/eventsObj.model';
import { EventsRequest } from 'src/app/models/eventsRequest.model';
import { Grids } from 'src/app/models/grids.model';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

@Component({
  selector: 'app-event-group',
  templateUrl: './event-group.component.html',
  styleUrls: ['./event-group.component.scss']
})
export class EventGroupComponent implements OnInit {

  @Input() calendarId: number
  @Input() dateFormated: string

  cols: number;
  gridBreakpoint: Grids = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private calendarService: CalendarService
  ) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridBreakpoint.xl;
        }
      }
    });
  }

  initReqEventsObj: EventsObj
  filteredEventsObj: Event[]
  p: number = 1;

  ngOnInit() {
    this.gettingEvents()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.p = 1
    let date = changes.dateFormated.currentValue

    if (date) {
      this.filteredEventsObj = this.initReqEventsObj.items.filter((item: Event) => {
        return item.start_datetime.includes(date)
      })
    } else if (this.initReqEventsObj) {
      this.filteredEventsObj = this.initReqEventsObj.items
    }
  }

  gettingEvents() {
    this.calendarService.getCalendarEvents(this.calendarId, 'events')
      .subscribe((data: EventsRequest) => {
        this.initReqEventsObj = data.data
        this.filteredEventsObj = data.data.items
      })
  }

}
