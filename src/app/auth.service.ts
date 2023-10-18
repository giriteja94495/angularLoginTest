import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    // Send a POST request to your NestJS login endpoint
    return this.http.post('http://localhost:3000/user/login', { username, password });
  }

  register(username: string, password: string) {
    // Send a POST request to your NestJS registration endpoint
    return this.http.post('http://localhost:3000/user/register', { username, password });
  }
}
