import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _http = inject(HttpClient);
  private urlBase = 'https://fakestoreapi.com/products';

  public getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.urlBase}`);
  }

  public getProductById(id: number): Observable<Product> {
    return this._http.get<Product>(`${this.urlBase}/${id}`);
  }
}
