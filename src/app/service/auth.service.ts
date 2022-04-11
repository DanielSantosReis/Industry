import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken(){
    this.token ={
      headers: new HttpHeaders().set('Authorization', environment.token)
    };
  }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://industryproject01.herokuapp.com/user/enter', userLogin)
  }

  register(user: User): Observable<User>{
    return this.http.post<User>('https://industryproject01.herokuapp.com/user/register', user)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`https://industryproject01.herokuapp.com/user/${id}`, this.token)
    }

    Logged() {
      let ok: boolean = false
  
      if(environment.token != '') {
        ok = true
      }
      return ok
    }
}
