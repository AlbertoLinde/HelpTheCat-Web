import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Asociacion } from '../models/asociacion.model';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AsociacionService {

  private url = environment.url;
  constructor(private http: HttpClient) { }


  newAsociacion(asociacion: Asociacion) {
    return this.http.post(`${this.url}/asociaciones.json`, asociacion)
      .pipe(
        map((resp: any) => {
          asociacion.id = resp.name;
          return asociacion;
        })
      )
  }

  getAsociaciones() {
    return this.http.get(`${this.url}/asociaciones.json`)
      .pipe(
        map(this.createArray)
      )
  }

  private createArray(asociacionObject: object) {

    const asociaciones: Asociacion[] = [];
    console.log(asociacionObject);

    if (asociacionObject === null) { return []; }

    Object.keys(asociacionObject)
      .forEach(key => {
        const asociacion: Asociacion = asociacionObject[key];
        asociacion.id = key;

        asociaciones.push(asociacion);
      })
    return asociaciones;
  }

}
















