import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrackComponent } from './add-edit-track.component';

describe('AddEditTrackComponent', () => {
  let component: AddEditTrackComponent;
  let fixture: ComponentFixture<AddEditTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
