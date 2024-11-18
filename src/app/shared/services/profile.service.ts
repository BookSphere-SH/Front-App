// src/app/shared/services/profile.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = '../../../../../server/db.json';  // Adjusted path to point to the parent directory

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getProfileById(_id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  registerProfile(profile: any): Observable<any> {
    return this.http.post(this.apiUrl, profile);
  }

  updateProfile(_id: number, profile: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, profile);
  }

  getByNameQuery(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?name=${name}`);
  }
}
