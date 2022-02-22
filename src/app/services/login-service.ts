
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../src/environments/environment';
import { UserLogin } from '../../../src/app/module/user-login';

@Injectable({ providedIn: 'root' })
export class LoginService {

  private userSubject: BehaviorSubject<UserLogin>;
  public user: Observable<UserLogin>;

constructor(
  private router:Router,
  private http:HttpClient
){
  this.userSubject = new BehaviorSubject<UserLogin>(JSON.parse(localStorage.getItem('user')|| '{}'));
        this.user = this.userSubject.asObservable();
}

public get userValue(): UserLogin {
  return this.userSubject.value;
}
login(username ,password){
return this.http.post<UserLogin>('${enviroment.apiUrl}/user/api/auth',{username,password}).pipe(
  map(user=>{
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
    return user;
  }));
}
logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('user');
  this.userSubject.next(null);
  this.router.navigate(['/account/login']);
}

register(user: UserLogin) {
  return this.http.post(`${environment.apiUrl}/users/register`, user);
}

getAll() {
  return this.http.get<UserLogin[]>(`${environment.apiUrl}/users`);
}

getById(id: string) {
  return this.http.get<UserLogin>(`${environment.apiUrl}/users/${id}`);
}

update(id, params) {
  return this.http.put(`${environment.apiUrl}/users/${id}`, params)
      .pipe(map(x => {
          // update stored user if the logged in user updated their own record
          if (id == this.userValue.id) {
              // update local storage
              const user = { ...this.userValue, ...params };
              localStorage.setItem('user', JSON.stringify(user));

              // publish updated user to subscribers
              this.userSubject.next(user);
          }
          return x;
      }));
}

delete(id: string) {
  return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(map(x => {
          // auto logout if the logged in user deleted their own record
          if (id == this.userValue.id) {
              this.logout();
          }
          return x;
      }));
}
}