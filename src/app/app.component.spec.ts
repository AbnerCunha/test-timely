import { TestBed, async, getTestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CalendarService } from './services/calendar/calendar.service';
import { DOMHelper } from 'src/testing/dom-helper';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;
  let calendarServiceMock: any;
  let eventMock: any;
  let calendarInfoMock = { id: 1, title: '', product: '' }
  let calendarObjMock = { data: { calendarInfoMock } }
  let domHelper: DOMHelper<AppComponent>;

  beforeEach(async(() => {
    calendarServiceMock = jasmine.createSpyObj('CalendarService', ['getCalendarInfo']);
    calendarServiceMock.getCalendarInfo.and.returnValue(of(calendarObjMock));

    eventMock = jasmine.createSpyObj('event', ['stopPropagation']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        ScrollingModule,
        MaterialModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: CalendarService, useValue: calendarServiceMock }
      ]
    }).compileComponents();

    httpMock = getTestBed().get(HttpTestingController)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    domHelper = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should call changingDate() with some date', () => {
    fixture.detectChanges();
    component.changingDate(new Date);
    expect(component.dateFormated).not.toBe('');
  });

  it('should call changingDate() without any date', () => {
    fixture.detectChanges();
    component.changingDate(null);
    expect(component.dateFormated).toBe('');
  });

  it('should call Info from CalendarService on init', () => {
    expect(calendarServiceMock.getCalendarInfo).toHaveBeenCalledTimes(1);
  });

  it('shoud call clearDate()', () => {
    fixture.detectChanges();
    spyOn(component, 'clearDate');
    domHelper.clickIconTag('mat-icon');
    expect(component.clearDate).toHaveBeenCalledTimes(1);
  });

  it('shoud stop event propagation', () => {
    fixture.detectChanges();
    domHelper.clickIconTag('mat-icon');
    component.clearDate(eventMock);
    expect(eventMock.stopPropagation).toHaveBeenCalledTimes(1);
  });

  it('shoud clear the date', () => {
    fixture.detectChanges();
    spyOn(component, 'clearDate');
    domHelper.clickIconTag('mat-icon');
    expect(component.dateFormated).toEqual('');
  });

  it('shoud reset the start date', () => {
    fixture.detectChanges();
    spyOn(component, 'clearDate');
    domHelper.clickIconTag('mat-icon');
    expect(component.startDate).toBeUndefined();
  });
});
