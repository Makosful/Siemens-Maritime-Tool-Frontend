import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {TokenService} from '../services/token.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private authService: AuthService, private tokenService: TokenService) { }
  navbarOpen = false;

  subscription: Subscription;
  loggedIn: boolean;

  ngOnInit() {
    this.subscription = this.tokenService.isLoggedIn
      .subscribe(loggedIn => {
        this.loggedIn = !!loggedIn;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onLogout(event) {
    this.authService.logout()
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
