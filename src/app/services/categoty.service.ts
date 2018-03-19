import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './../shared/entities/Category';

@Injectable()
export class CategotyService {
  private apiUrl = '/api/categories';

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
  addCategory(category: Category): Observable<Category> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Category>(this.apiUrl, category, { headers });
  }
  deleteCategory(id: number): Observable<Category[]> {
    return this.http.delete<Category[]>(`${this.apiUrl}/${id}`);
  }
}
