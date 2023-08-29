import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseurl="http://localhost:3001/api/articles"

  constructor(private http:HttpClient) { }
  getallArticles():Observable<Product[]>{
  return this.http.get<Product[]>(this.baseurl)
}
}
