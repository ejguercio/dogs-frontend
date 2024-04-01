import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.interface';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://dogs-production-82a6.up.railway.app/dogs';

  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  getDogById(id: number | string): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.apiUrl}/${id}`);
  }
}
