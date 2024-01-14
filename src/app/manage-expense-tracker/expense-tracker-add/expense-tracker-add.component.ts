import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { apiExpenseTrackerAdd, apiUrl } from 'src/app/common';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-expense-tracker-add',
  templateUrl: './expense-tracker-add.component.html',
  styleUrls: ['./expense-tracker-add.component.css']
})
export class ExpenseTrackerAddComponent implements OnInit {

  expenseDetailsForm: FormGroup;
  constructor(public apiService: ApiService,formBuilder: FormBuilder,public router: Router, public userService: UserService) {
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


  submitExpenseTrackerDetails(expenseDetails: any) {
    try {
      let url = apiUrl + apiExpenseTrackerAdd;
      let body = {
        "expense-tracker-details": [
          {
            "name": expenseDetails['name'],
            "amount": expenseDetails['amount'],
            "description": expenseDetails['description']
          }
        ]
      }
      this.apiService.doPostCall(url, body).subscribe((response) => {
        let status = response['status'];
        if (status != undefined && status['error-code'] == "000") {

        } else {

        }
      }).unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }

  gotoExpenseDetails() {
    this.router.navigateByUrl("/expence-details", { skipLocationChange: true });
  }
}
