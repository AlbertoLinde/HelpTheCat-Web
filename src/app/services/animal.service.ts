import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Animal } from '../models/animal.model';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  newAnimal(animal: Animal) {
    return this.http.post(`${this.url}/animales.json`, animal)
      .pipe(
        map((resp: any) => {
          animal.id = resp.name;
          return animal;
        })
      )
  }

  getAnimal(id: string) {
    return this.http.get(`${this.url}/animales/${id}.json`);
  }

  getAnimales() {
    return this.http.get(`${this.url}/animales.json`)
      .pipe(
        map(this.createArray)
      )
  }

  getTotalAnimals() {
    return this.http.get(`${this.url}/animales.json`)
      .pipe(
        map(resp => {
          return Object.keys(resp).length;
        })
      )
  }

  updateAnimal(animal: Animal) {
    const heroeTemp = {
      ...animal
    }
    delete heroeTemp.id;
    return this.http.put(`${this.url}/animales/${animal.id}.json`, heroeTemp)
  }

  private createArray(animalesObject: object) {

    const animales: Animal[] = [];
    console.log(animalesObject)

    if (animalesObject === null) { return []; }

    Object.keys(animalesObject)
      .forEach(key => {
        const animal: Animal = animalesObject[key];
        animal.id = key;

        animales.push(animal);
      })
    return animales;
  }


}
