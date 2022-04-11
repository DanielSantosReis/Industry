import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  getAllProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('https://industryproject01.herokuapp.com/product/all')
  }

  getByIdProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`https://industryproject01.herokuapp.com/product/${id}`)
  }

  getByNameProduct(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://industryproject01.herokuapp.com/product/name/${name}`)
  }

  postProduct(product: Product): Observable<Product>{
    return this.http.post<Product>('https://industryproject01.herokuapp.com/product', product, this.token)
  }

  putProduct(product: Product): Observable<Product>{
    return this.http.put<Product>('https://industryproject01.herokuapp.com/product', product, this.token)
  }

  deleteProduct(id: number) {
    return this.http.delete(`https://industryproject01.herokuapp.com/product/${id}`, this.token)
  }
}
