import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { ExpenseTrackerAddComponent } from './expense-tracker-add/expense-tracker-add.component';
import { ExpenseTrackerEditComponent } from './expense-tracker-edit/expense-tracker-edit.component';

const routes: Routes = [
  {
    path: 'expence-details',
    component:ExpenseTrackerComponent
  },
  {
    path: 'expence-details/add',
    component:ExpenseTrackerAddComponent
  },
  {
    path: 'expence-details/edit',
    component: ExpenseTrackerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageExpenseTrackerRoutingModule { }
