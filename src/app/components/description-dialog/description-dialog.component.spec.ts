import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DescriptionDialogComponent } from './description-dialog.component';

describe('DescriptionDialogComponent', () => {
  let component: DescriptionDialogComponent;
  let fixture: ComponentFixture<DescriptionDialogComponent>;
  let matDialogMock: any;

  beforeEach(async(() => {
    matDialogMock = jasmine.createSpyObj('MatDialogRef', ['close'])

    TestBed.configureTestingModule({
      declarations: [ DescriptionDialogComponent ],
      imports: [ MatDialogModule ],
      providers: [
        { provide: MatDialogRef, useValue: matDialogMock },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call close()', () => {
    fixture.detectChanges();
    component.close();
    expect(matDialogMock.close).toBeTruthy();
  });
});
