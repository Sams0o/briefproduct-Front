import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  setHeaders() {
    const jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/products');
  }

  getProductId(idProduct: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/api/products/${idProduct}`,
      { headers: this.setHeaders()}
    );
  }

  addProduct(product: Product) {
    return this.http.post<Product>(
      'http://localhost:3000/api/products',
      product,
      { headers: this.setHeaders() }
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(
      `http://localhost:3000/api/products/${product.id}`,
      product,
      { headers: this.setHeaders() }
    );
  }

  removeProduct(product: number) {
    return this.http.delete<Product>(
      `http://localhost:3000/api/products/${product}`,
      { headers: this.setHeaders() }
    );
  }
}
