import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageExpenseTrackerRoutingModule } from './manage-expense-tracker-routing.module';
import { ExpenseTrackerAddComponent } from './expense-tracker-add/expense-tracker-add.component';
import { ExpenseTrackerEditComponent } from './expense-tracker-edit/expense-tracker-edit.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExpenseTrackerAddComponent,
    ExpenseTrackerEditComponent,
    ExpenseTrackerComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    ManageExpenseTrackerRoutingModule
  ]
})
export class ManageExpenseTrackerModule { }
