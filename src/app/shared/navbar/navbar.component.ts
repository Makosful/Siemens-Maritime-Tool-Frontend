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
  constructor(
    private loginService: LoginService, private tokenService: TokenService) { }

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .pipe(
        // Map to
        switchMap(isLoggenIn => {
          this.loggedIn = isLoggenIn;
          return this.tokenService.getUserFromToken();
        })
      ).subscribe(user => {
        this.displayName = user ? user.email : '';
      });
    /*
        this.subscription = this.tokenService.isLoggedIn
          .subscribe(loggedIn => {
            this.loggedIn = loggedIn;
            if (this.loggedIn) {
              this.tokenService.getUserFromToken().subscribe(
                user => {
                  this.displayName = user.displayName;
                }
              );
            }
        });
    */
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
