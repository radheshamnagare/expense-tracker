import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Expense Tracker';
  
  constructor(public userService: UserService,
    public router: Router) {

  }

  ngOnInit(): void {
   // this.userService.removeSession();
    // if (!this.userService.isLogInUser) {
    //   this.router.navigateByUrl("/login")
    // } else {
    //   this.router.navigateByUrl('/graph');
    // }
  }
  

    
}
