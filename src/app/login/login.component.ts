import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';
  invalidUserName = false;
  isLoggedIn = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: LoginService) { }

  ngOnInit() {
  if (this.isLoggedIn) { this.authenticationService.logout(); }
    //  Initialize the form group
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    if (this.username) {
      const txt = this.username.value;
      if (txt.includes('.')) { this.invalidUserName = true;
      this.errorMessage = 'Username contains a dot (.)';
      return; }
    } else {
    this.loading = true;
    }
    this.authenticationService.login(this.loginForm.value)
      .subscribe(
        success => {
          this.isLoggedIn = true;
          this.router.navigate(['/']);
        },
        error => {
          this.errorMessage = error.message;
          this.loading = false;
        });
  }
}
