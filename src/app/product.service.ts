import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductService {
  api = "https://5e9d17780fd0b50016f74afa.mockapi.io/products";
  products = data;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }

  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
  }
  updateProduct(product) {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
}
