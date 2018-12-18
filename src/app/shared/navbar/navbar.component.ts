import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from '../services/token.service';
import {Subscription} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  loggedIn: boolean;
  displayName: string;
  navbarOpen = false;
  isAdmin = false;
  constructor(
    private loginService: LoginService, private tokenService: TokenService) { }

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .pipe(
        // Map to
        switchMap(isLoggedIn => {
          this.loggedIn = isLoggedIn;
          return this.tokenService.getUserFromToken();
        })
      ).subscribe(user => {
        if (user) {
          this.displayName = user.username;
          this.isAdmin = user.isAdmin;
        } else {
          this.displayName = '';
          this.isAdmin = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logOut(event) {
    this.loginService.logout()
      .pipe(
        take(1)
      ).subscribe(() => {
      this.loggedIn = false;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
