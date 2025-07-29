import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
  export class RandomUserService {
    private apiUrl = environment.randomUserApiUrl; // Get URL API

    constructor(private http: HttpClient) {}

    // Fetche a random user from the RandomUser API
    getRandomUser(): Observable<any> {
      return this.http.get<any>(this.apiUrl).pipe(
        map(response => response.results[0])
      );
    }

    // Fetche a random users from the RandomUser API
    getRandomUsers(): Observable<any[]> {
      return this.http.get<any>(`${this.apiUrl}?results=5`).pipe(
        map(response => response.results)
      );
    }
}
