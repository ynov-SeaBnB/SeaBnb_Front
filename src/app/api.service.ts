import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3307';

  constructor(private http: HttpClient) {}

  login(credentials: {
    emailAddress: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.API_URL}/users/login`, credentials);
  }

  getBoatsDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/boats`);
  }

  // Ajoutez d'autres appels d'API au besoin...
}
