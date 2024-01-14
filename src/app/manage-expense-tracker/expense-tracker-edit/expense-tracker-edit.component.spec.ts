import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerEditComponent } from './expense-tracker-edit.component';

describe('ExpenseTrackerEditComponent', () => {
  let component: ExpenseTrackerEditComponent;
  let fixture: ComponentFixture<ExpenseTrackerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTrackerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
