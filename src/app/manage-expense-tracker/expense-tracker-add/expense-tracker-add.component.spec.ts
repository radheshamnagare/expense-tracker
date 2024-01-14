import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTrackerAddComponent } from './expense-tracker-add.component';

describe('ExpenseTrackerAddComponent', () => {
  let component: ExpenseTrackerAddComponent;
  let fixture: ComponentFixture<ExpenseTrackerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTrackerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseTrackerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
