import { Animal } from './Model/Animal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private headers: HttpHeaders;
  private apiEndpoint: string = 'http://localhost:5000/api/animals';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  /**
   * Get all animals
   */
  public get() {
    return this.http.get(this.apiEndpoint);
  }

  /**
   * Add new animal
   * @param animal
   */
  public add(animal) {
    return this.http.post(this.apiEndpoint, animal);
  }

  /**
   * Delete animal
   * @param animalId
   */
  public delete(animalId: number) {
    return this.http.delete(this.apiEndpoint + '/' + animalId);
  }

  /**
   * Delete animal
   * @param animal
   */
  public update(animal) {
    return this.http.put(this.apiEndpoint + '/' + animal.animalId, animal);
  }
}
