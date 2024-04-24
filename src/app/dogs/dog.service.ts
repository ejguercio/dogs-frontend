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

  formatAndPost(formData: {
    name: string;
    minHeight: string;
    maxHeight: string;
    minWeight: string;
    maxWeight: string;
    minLife: string;
    maxLife: string;
    selectedTemperaments: Array<string>;
  }) {
    const newDog = {
      name: formData.name,
      height: `${formData.minHeight} - ${formData.maxHeight}`,
      weight: `${formData.minWeight} - ${formData.maxWeight}`,
      maxWeight: formData.maxWeight,
      life_span: `${formData.minLife} - ${formData.maxLife}`,
      temperament: formData.selectedTemperaments,
    };
    return this.http.post<Dog[]>(this.urlBase, newDog);
  }
}
