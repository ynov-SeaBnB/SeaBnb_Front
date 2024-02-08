import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(credentials: {
    emailAddress: string;
    password: string;
  }): Observable<any> {
    return this.http.post(`${this.API_URL}/users/login`, credentials);
  }

  register(userData: {
    emailAddress: string;
    password: string;
    name: string;
    firstName: string;
    birthDate: string;
    creationDate: string;
  }): Observable<any> {
    return this.http.post(`${this.API_URL}/users/register`, userData);
  }

  getBoatsDetails(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/boats`);
  }

  getBoatDetails(id: string | null): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/boats/${id}`);
  }

  createBoat(boatData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/boats`, boatData);
  }

  getProfil() {
    return this.http.get(`${this.API_URL}/users/${localStorage.getItem('id')}`);
  }
}
