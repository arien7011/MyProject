import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEMployeeComponent } from './edit-employee.component';

describe('EditEMployeeComponent', () => {
  let component: EditEMployeeComponent;
  let fixture: ComponentFixture<EditEMployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEMployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEMployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
