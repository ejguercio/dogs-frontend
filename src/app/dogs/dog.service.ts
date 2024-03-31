import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//TODO REFACTORIZAR INTERFACE
export interface Dog {
  id: string | number;
  name: string;
  height: string;
  weight: string;
  maxWeight: number;
  life_span: string;
  image: string;
  temperament: string;
  created: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private apiUrl = 'https://dogs-production-82a6.up.railway.app/dogs';

  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  getDogById(id: number | string): Observable<Dog> {
    return this.http.get<Dog>(`${this.apiUrl}/${id}`);
  }
}
