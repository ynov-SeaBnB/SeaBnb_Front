import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, credentials);
  }

  getBoatsDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/boats`);
  }

  createBoat(boatData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/boats`, boatData);
  }
}
