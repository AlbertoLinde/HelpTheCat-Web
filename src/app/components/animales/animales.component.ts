import { Component, OnInit } from '@angular/core';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: AnimalModel[] = [];
  totalCats: number;
  pendienteFacturas: number;
  cantidadRecaudada: number;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {

    this.animalService.getAnimales()
      .subscribe(resp => {
        this.animales = resp;
        this.totalCats = this.animales.length;
        this.pendienteFacturas = this.calcularDonaciones(resp);
        this.cantidadRecaudada = this.cantidadRecaudado(resp);
      });
  }

  // TO-DO Pendiente comprobación de errores.
  calcularDonaciones(resp): number {
    var total: number = 0;
    resp.forEach(element => {
      let number = parseInt(element.cantidadPendiente);
      total += number;
    });
    return total;
  }

  cantidadRecaudado(resp): number {
    var total: number = 0;
    resp.forEach(element => {
      let number = parseInt(element.cantidadRecaudada);
      total += number;
    });
    return total;
  }

}
