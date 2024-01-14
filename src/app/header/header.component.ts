import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { USER_LOGIN, USER_SESSION_KEY, apiLogoutUser, apiUrl } from '../common';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title = "Expense Tracker";

  constructor(public userService:UserService,public router:Router,public apiService:ApiService) {
    
  }

  ngOnInit(): void {
    //this.logout();
  }
  
  logout() {
    try {
      let url = apiUrl+apiLogoutUser;
      let body = {
      }
      this.apiService.doPostCall(url, body).subscribe((response) => {
        console.log(response)
        let status = response['status'];
        if (status != undefined && status['error-code'] == "000") {
          sessionStorage.removeItem(USER_LOGIN);
          sessionStorage.removeItem(USER_SESSION_KEY);
          this.gotoLoginPage();
        }
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  gotoLoginPage() {
    this.router.navigateByUrl("/login");
  }
}
