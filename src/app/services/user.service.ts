import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/responseLogin';
import { LoginUser } from '../models/loginUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  setHeaders() {
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  registerUser(data: User): Observable<User> {
    console.log('userService:', data);

    return this.http.post<User>(
      'http://localhost:3000/api/auth/register',
      data
    );
  }

  loginUser(data: LoginUser) {
    console.log('userService:', data);
    return this.http
      .post<ResponseLogin>('http://localhost:3000/api/auth/login', data)
      // .subscribe((res) => {
      //   console.log('loginUserService', res.accessToken);
      // })
  }
}
