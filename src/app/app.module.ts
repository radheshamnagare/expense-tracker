import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManageGraphRoutingModule } from './manage-graph/manage-graph-routing.module';
import { ManageUserRoutingModule } from './manage-user/manage-user-routing.module';
import { ManageExpenseTrackerRoutingModule } from './manage-expense-tracker/manage-expense-tracker-routing.module';
import { ManageGraphModule } from './manage-graph/manage-graph.module';
import { ManageUserModule } from './manage-user/manage-user.module';
import { ManageExpenseTrackerModule } from './manage-expense-tracker/manage-expense-tracker.module';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ManageGraphModule,
    ManageGraphRoutingModule,
    ManageUserModule,
    ManageUserRoutingModule,
    ManageExpenseTrackerModule,
    ManageExpenseTrackerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
