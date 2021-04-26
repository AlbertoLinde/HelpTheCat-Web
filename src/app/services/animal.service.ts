import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AnimalModel } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  private url = 'https://help-the-cats-default-rtdb.firebaseio.com'


  getAnimales() {
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map(resp => {
          this.createArray(resp)
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
