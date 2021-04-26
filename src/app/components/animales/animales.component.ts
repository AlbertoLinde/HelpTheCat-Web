import { Component, OnInit } from '@angular/core';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  animal: AnimalModel = new AnimalModel();

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {

    this.animalService.getAnimales()
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
