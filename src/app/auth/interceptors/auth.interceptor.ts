import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from '../../shared/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getJwtToken();
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}`}
      });
    }
    return next.handle(request);
  }
}
