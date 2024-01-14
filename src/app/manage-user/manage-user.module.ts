import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUserRoutingModule } from './manage-user-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    ManageUserRoutingModule
  ]
})
export class ManageUserModule { }
