import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material';
import { Event } from 'src/app/models/event.model';
import { EventImage } from 'src/app/models/eventImage.model';
import { DOMHelper } from 'src/testing/dom-helper';

import { EventComponent } from './event.component';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let matDialogMock: any;
  let eventImageMock: EventImage[] = [{ title: '', sizes: '' }]
  let eventWithDescriptionMock: Event = { title: '', images: eventImageMock, description_short: 'short description', start_datetime: '', end_datetime: '' }
  let domHelper: DOMHelper<EventComponent>;

  beforeEach(async(() => {
    matDialogMock = jasmine.createSpyObj('MatDialog', ['open'])

    TestBed.configureTestingModule({
      declarations: [ EventComponent ],
      imports: [ MatDialogModule ],
      providers: [
        { provide: MatDialog, useValue: matDialogMock },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    component.image = eventImageMock[0];
    component.event = eventWithDescriptionMock;
    domHelper = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud call openDialog()', () => {
    fixture.detectChanges();
    spyOn(component, 'openDialog');
    domHelper.clickButton('Description');
    expect(component.openDialog).toHaveBeenCalledTimes(1);
  });

  it('shoud call open() from MatDialog', () => {
    fixture.detectChanges();
    domHelper.clickButton('Description');
    expect(matDialogMock.open).toHaveBeenCalledTimes(1);
  });
});
