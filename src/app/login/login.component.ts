import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';
import {TokenService} from '../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  constructor(private auth: AuthService, private router: Router) {
    this.loginGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      // remember: new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginGroup.value).subscribe(token => {
      if (token) {
        this.router.navigateByUrl('/');
      }
    });
  }
}
