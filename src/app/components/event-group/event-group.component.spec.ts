import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { DOMHelper } from 'src/testing/dom-helper';

import { EventGroupComponent } from './event-group.component';

describe('EventGroupComponent', () => {
  let component: EventGroupComponent;
  let fixture: ComponentFixture<EventGroupComponent>;
  let domHelper: DOMHelper<EventGroupComponent>;
  let calendarServiceMock: any;
  let filteredMock = [{ title: '', description_short: '', end_datetime: '', start_datetime: '', images: [] }];
  let initReqMock = { from: 0, size: 1, total: 1, has_next: false, has_prior: false, items: filteredMock };
  let eventReqMock = { data: { initReqMock } };

  beforeEach(async(() => {
    calendarServiceMock = jasmine.createSpyObj('CalendarService', ['getCalendarEvents']);
    calendarServiceMock.getCalendarEvents.and.returnValue(of(eventReqMock));

    TestBed.configureTestingModule({
      declarations: [EventGroupComponent],
      imports: [
        MatGridListModule,
        NgxPaginationModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CalendarService, useValue: calendarServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventGroupComponent);
    component = fixture.componentInstance;
    domHelper = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have a spinner', () => {
    expect(domHelper.count('app-spinner')).toBe(1);
  });

  it('shoud show some event when I have Events Object', () => {
    component.filteredEventsObj = filteredMock;
    fixture.detectChanges();
    expect(domHelper.count('mat-grid-list')).toBe(1);
  });

  it('should detect dateFormated changes', () => {
    component.dateFormated = '';
    component.ngOnChanges({
      dateFormated: new SimpleChange('', '', true)
    });
    expect(component.dateFormated).toBe('')
  });

  it('should call Events from CalendarService on init', () => {
    expect(calendarServiceMock.getCalendarEvents).toHaveBeenCalledTimes(1);
  });
});
