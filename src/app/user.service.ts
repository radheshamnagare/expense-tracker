import { Injectable } from '@angular/core';
import { USER_LOGIN, USER_SESSION_KEY } from './common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor() { }

  get isLogInUser() {
    let status = sessionStorage.getItem(USER_LOGIN);
    if (status != null || status != undefined)
      return status=="1";
    return false;
  }

  set logInStatus(status: string) {
    sessionStorage.setItem(USER_LOGIN, status);
  }

  loginUserSession(details:any) {
    sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(details));
  }

  removeSession() {
    sessionStorage.removeItem(USER_SESSION_KEY);
    sessionStorage.removeItem(USER_LOGIN);
  }

  get authKeyFromSession() {
    let userDetails = JSON.parse(sessionStorage.getItem(USER_SESSION_KEY));
    let authkey = "";
    if (userDetails != null)
      authkey = userDetails['auth-token']
    return authkey;
  }
}
