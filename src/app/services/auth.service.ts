import { Storage } from '@ionic/storage';
import { TResponse } from './../../models/TokenResponse';
import { Credentials } from './../../models/Credentials';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { take, map, switchMap } from 'rxjs/operators'

const helper = new JwtHelperService();
const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(private http: HttpClient, private plt: Platform, private router: Router,
    private storage: Storage) {
    this.loadStoredToken();
  }

  loadStoredToken() {
    let platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY));
      }),
      map(token => {
        if (token) {
          let decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  logMeIn(user: Credentials): Observable<any> {
    let IP = localStorage.getItem('TargetIP');
    return this.http.post<TResponse>("http://" + IP + "/services/api/auth/login", user).pipe(
      switchMap(token => {
        let decoded = jwt_decode(token.token);
        this.userData.next(decoded);
        localStorage.setItem(TOKEN_KEY, token.token);
        localStorage.setItem('ADuser', decoded.idUser);
        let storageObs = from(this.storage.set(TOKEN_KEY, token.token));
        return storageObs;
      })
    )
  }

  getUser() {
    return this.userData.getValue();
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem('role');
      this.router.navigateByUrl('/login');
      this.userData.next(null);
    });
  }
}
