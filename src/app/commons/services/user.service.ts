import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn: boolean;
  private userName: string;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(status: boolean) {
    this.isUserLoggedIn = status;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName() {
    return this.userName;
  }

}
