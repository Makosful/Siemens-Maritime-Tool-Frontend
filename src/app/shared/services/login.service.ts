import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  public login(user: User): Observable<string> {
    return this.http.post<string>(environment.apiUrl + '/token', user, {responseType: 'text' as 'json'})
      .pipe(switchMap(token => Observable.create(obs => {
            this.tokenService.setToken(token);
            obs.next(token); }
            ))
      );
  }

  public logout(): Observable<boolean> {
    return Observable.create(obs => {
      this.tokenService.clearToken();
      obs.next(!this.tokenService.getJwtToken());
    });
  }
}
