import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-expense-tracker-edit',
  templateUrl: './expense-tracker-edit.component.html',
  styleUrls: ['./expense-tracker-edit.component.css']
})
export class ExpenseTrackerEditComponent implements OnInit{

  expenseDetailsForm: FormGroup;
  constructor(public apiService: ApiService, formBuilder: FormBuilder,public userService:UserService,public router:Router) {
    this.expenseDetailsForm = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
      amount: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(256)])
    })
  }
  ngOnInit(): void {
    if (!this.userService.isLogInUser) {
      this.router.navigateByUrl("/login");
    }
  }
}
