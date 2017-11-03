import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() userName: string;


  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    console.log(this.userName);
  }

  logOut() {
    this.userService.setUserLoggedIn(false);
    this.userService.setUserName(null);
    this.router.navigate(['login']);

  }

}
