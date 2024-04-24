import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../models/dog.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private urlBase: string = `${environment.urlBase}dogs`;
  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.urlBase);
  }

  getDogById(id: number | string): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.urlBase}/${id}`);
  }
}
