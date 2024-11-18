
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '../../../../../server/db.json';  // Adjusted path to point to the parent directory

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getUserById(_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(_id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, user);
  }
  getByNameQuery(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?name=${name}`);
  }
}
