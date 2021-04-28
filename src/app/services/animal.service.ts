import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AnimalModel } from '../models/animal.model';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private url = environment.url;

  constructor(private http: HttpClient) { }

  newAnimal(animal: AnimalModel) {
    return this.http.post(`${this.url}/animales.json`, animal)
      .pipe(
        map((resp: any) => {
          animal.id = resp.name;
          return animal;
        })
      )
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

  private createArray(animalesObject: object) {

    const animales: AnimalModel[] = [];
    console.log(animalesObject)

    if (animalesObject === null) { return []; }

    Object.keys(animalesObject)
      .forEach(key => {
        const animal: AnimalModel = animalesObject[key];
        animal.id = key;

        animales.push(animal);
      })
    return animales;
  }





}
