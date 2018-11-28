import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private tokenService: TokenService) { }

  public login(user: User): Observable<string> {
    return this.httpClient.post<string>(environment.apiUrl + '/login', user, {responseType: 'text' as 'json'})
      .pipe(
        switchMap(token => Observable.create(obs => {
            this.tokenService.setToken(token);
            obs.next(token);
          })
        )
      );
  }

  public logout(): Observable<boolean> {
    return Observable.create(obs => {
      this.tokenService.clearToken();
      obs.next(!this.tokenService.getToken());
    });
  }
}
