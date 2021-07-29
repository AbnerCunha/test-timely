import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let httpMock: HttpTestingController;
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })

    httpMock = getTestBed().get(HttpTestingController)
    service = TestBed.get(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getCalendarEvents()', () => {
    service.getCalendarEvents(1, '');
  });

  it('should call getCalendarInfo()', () => {
    service.getCalendarInfo('', '');
  });
});
