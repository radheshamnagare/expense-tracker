import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ManageGraphRoutingModule } from './manage-graph-routing.module';
import { ManageGraphComponent } from './manage-graph.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManageGraphComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ManageGraphRoutingModule
  ],
})
export class ManageGraphModule { }
