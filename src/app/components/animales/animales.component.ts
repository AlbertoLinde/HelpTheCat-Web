import { Component, OnInit } from '@angular/core';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animales: AnimalModel [] = [];
  totalCats: number;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {

    this.animalService.getAnimales()
      .subscribe(resp => {
        console.log(resp);
        this.animales = resp;
      });

    // TO-DO Pendiente de modificar, repetitivo.
    this.animalService.getTotalAnimals()
      .subscribe(resp => {
        this.totalCats = resp;
      });

  }

}
