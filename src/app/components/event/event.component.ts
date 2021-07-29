import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event.model';
import { EventImage } from 'src/app/models/eventImage.model';
import { MatDialog } from '@angular/material/dialog'
import { DescriptionDialogComponent } from '../description-dialog/description-dialog.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event

  image: EventImage

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DescriptionDialogComponent, {
      data: this.event.description_short
    })
  }

}
