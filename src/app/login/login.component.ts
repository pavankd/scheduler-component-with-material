import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  doLogin(lform) {
    console.log(`user name is : ${lform.value.userName} , Password is : ${lform.value.password}`);
    if (lform.value.userName === 'pavan.fd' && lform.value.password === '123456') {
      console.log('Login success');
      this.userService.setUserLoggedIn(true);
      this.userService.setUserName(lform.value.userName);
      this.router.navigate(['/']);
    } else {
      console.log('invalid user');
    }
  }

}
