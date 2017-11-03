import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: String;

  constructor(private userService: UserService,
              private router: Router) {
    console.log("Dashboard called");
  }

  ngOnInit() {

    if (!this.userService.getUserLoggedIn()) {
      this.router.navigate(['login']);
    } else {
      console.log(this.userService.getUserName())
      this.userName = this.userService.getUserName();
    }

  }

}
