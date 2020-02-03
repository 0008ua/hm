import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  getUser(): Observable<IUser|null> {
    const cookie = this.cookieService.get('hm');
    if (cookie) {
      const helper = new JwtHelperService();
      const user = helper.decodeToken(cookie).sub;
      return of(user);
    }
    return of(null);
  }

  logout(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.get<string>(
      'api/user/logout',
      httpOptions
    );
  }
}
