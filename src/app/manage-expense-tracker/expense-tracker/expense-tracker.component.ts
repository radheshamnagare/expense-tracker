import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { EXPENSE_TRACKER_KEY, apiExpenseTrackerDelete, apiExpenseTrackerLookUp, apiUrl } from 'src/app/common';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {

  colHeaders: any = ["Name", "Amount", "Desciption", "Insert Time", "Update Time", "Action"];
  expenseDetailsList: any = [];

  constructor(public apiService: ApiService, public router: Router,public userService:UserService) {

  }

  ngOnInit(): void {
    try {
      // if (!this.userService.isLogInUser) {
      //   this.router.navigateByUrl("/login");
      // }
      this.loadExpenseTrackerDetails();
    } catch (error) {
      console.log(error);
    }
  }

  loadExpenseTrackerDetails() {
    try {
      let url = "http://localhost:5001/expence-tracker/expensetrackerdetails/lookup";
      let body = {
        "from-date": "z",
        "to-date": "w",
      }
      this.apiService.doPostCall(url, body).subscribe((response) => {
        let status = response['status'];
        if (status != undefined && status['error-code'] == "000") {
          this.expenseDetailsList = response['expense-tracker-details']
        } else {

        }
      }).unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }

  editExpenseDetails(rowData: any) {
    try {
      sessionStorage.setItem(EXPENSE_TRACKER_KEY, JSON.stringify(rowData));
      this.router.navigateByUrl("/expence-details/edit", { skipLocationChange: true });
    } catch (error) {
      console.log(error);
    }
  }

  deleteExpenseDetails(rowData) {
    try {
      let url = apiUrl + apiExpenseTrackerDelete;
      let body = {
        "expense-tracker-details": [
          {
            'id': rowData['id'],
            'name': rowData['name']
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

}
