import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Feedstock } from '../model/feedstock';

@Injectable({
  providedIn: 'root'
})
export class FeedstockService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }

  getAllFeedstock(): Observable<Feedstock[]> {
    return this.http.get<Feedstock[]>('https://industryproject01.herokuapp.com/feedstock')
  }

  getByIdFeedstock(id: number): Observable<Feedstock> {
    return this.http.get<Feedstock>(`https://industryproject01.herokuapp.com/feedstock/${id}`)
  }

  getByNameFeedstock(name: string): Observable<Feedstock[]> {
    return this.http.get<Feedstock[]>(`https://industryproject01.herokuapp.com/feedstock/name/${name}`)
  }

  postFeedstock(feedstock: Feedstock): Observable<Feedstock>{
    return this.http.post<Feedstock>('https://industryproject01.herokuapp.com/feedstock', feedstock, this.token)

  }

  putFeedstock(feedstock: Feedstock): Observable<Feedstock>{
    return this.http.put<Feedstock>('https://industryproject01.herokuapp.com/feedstock', feedstock, this.token)
  }

  deleteFeedstock(id: number) {
    return this.http.delete(`https://industryproject01.herokuapp.com/feedstock/${id}`, this.token)
  }
}
