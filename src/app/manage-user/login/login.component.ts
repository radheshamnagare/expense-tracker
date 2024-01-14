import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DOMAIN, USER_LOGIN, USER_SESSION_KEY, apiLoginUser, apiUrl } from 'src/app/common';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  constructor(public userService: UserService,
    public apiService: ApiService,
    formBuilder: FormBuilder,
    public router:Router) {
    this.userForm = formBuilder.group({
      username: new FormControl('', [Validators.required,Validators.minLength(3) ,Validators.maxLength(12)]),
      password:new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    sessionStorage.removeItem(USER_LOGIN);
    sessionStorage.removeItem(USER_SESSION_KEY);
  }

  submitUserDetails(userDetails:any) {
    try {
      if (this.userForm.valid) {
        console.log(userDetails)
        let url = "http://localhost:5001/expence-tracker/user/login"
        let body = {
          "user-id": userDetails['username'],
          "password": userDetails['password'],
          "domain":DOMAIN
        }
        this.apiService.doPostCall(url, body).subscribe((response) => {
          console.log(response)
          let status = response['status'];
          if (status != undefined && status['error-code'] == "000") {
            let authKey = response['auth-token'];
            let username = response['user-name'];
            let userDetails = {
              'auth-token': authKey,
              'user-name':username
            }
            this.userService.loginUserSession(userDetails);
            this.userService.logInStatus = "1";
            this.gotoDashboard();
          } else {
            this.userService.logInStatus = "0"; 
          }
        })
      } else {
        
      }   
    } catch (error) {
      console.log(error); 
    }
  }  

  gotoDashboard() {
    try {
      this.router.navigateByUrl("/graph");
    } catch (error) {
      console.log(error);
    }
  }
}
