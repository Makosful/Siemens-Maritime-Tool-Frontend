import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {first, map, switchMap} from 'rxjs/operators';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public isLoggedIn = new BehaviorSubject<boolean>(!!this.getJwtToken());

  constructor() { }

  /**
   * Gets the JWToken as raw text, formatted as JSON
   */
  public getJwtToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * Gets the Token key from inside the JWToken
   */
  public getToken(): string {
    // console.log(localStorage.getItem('token'));
    return JSON.parse(localStorage.getItem('token')).token;
  }

  public setToken(token: string) {
    localStorage.setItem('token', token);
    this.isLoggedIn.next(!!token);
  }

  public clearToken() {
    localStorage.removeItem('token');
    this.isLoggedIn.next(undefined);
  }

  public isAuthenticated(): Observable<boolean> {
    // get the token aand notify listeners!
    return Observable.create(obs => {
      obs.next(this.getToken());
    });
  }

  public getUserFromToken(): Observable<User> {
    return Observable.create(obs => {
      const token = this.getToken();
      let decoded: User;
      if (token) {
        const jwt = new JwtHelperService();
        decoded = jwt.decodeToken(token);
        console.log(jwt.decodeToken(token));
      }
      obs.next(decoded);
    });
  }

  public isAdmin(): any {
    return this.getUserFromToken().
    pipe(
      first(),
    map(user => {
        if (user && user.role === 'Administrator') {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  public getHttpOptions() {
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.getToken() }),
      params: new HttpParams()
    };
  }
}
