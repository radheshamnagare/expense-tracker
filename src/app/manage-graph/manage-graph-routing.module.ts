import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageGraphComponent } from './manage-graph.component';

const routes: Routes = [
  {
    path: 'graph',
    component:ManageGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageGraphRoutingModule { }
