import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: Animal[] = [];
  totalCats: number;
  pendienteFacturas: number;
  cantidadRecaudada: number;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {

    this.animalService.getAnimales()
      .subscribe(resp => {
        this.animales = resp;
        this.totalCats = this.animales.length;


        console.log("RESPUESTA INIT : " + JSON.stringify(resp))

        this.pendienteFacturas = this.calcularDonaciones(resp);
        this.cantidadRecaudada = this.cantidadRecaudado(resp);
      });
  }

  // TO-DO Pendiente comprobación de errores.
  calcularDonaciones(resp): number {
    var total: number = 0;
    resp.forEach(element => {
      console.log("Cantidad Pendiente" + element.cantidadPendiente)
      if (element.cantidadPendiente != null && element.cantidadPendiente != undefined) {
        let number = parseInt(element.cantidadPendiente);
        total += number;
      } else {
        total += 0;
      }

      console.log(total)
    });
    return total;
  }

  cantidadRecaudado(resp): number {
    var total: number = 0;
    resp.forEach(element => {
      if (element.cantidadRecaudada != null && element.cantidadRecaudada != undefined) {
        let number = parseInt(element.cantidadRecaudada);
        total += number;
      } else {
        total += 0;
      }
      console.log(total)
    });
    return total;
  }

}
