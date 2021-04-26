import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnimalModel } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animal: AnimalModel = new AnimalModel();

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
  }

  saveAnimal(form: NgForm) {
    this.animalService.newAnimal(this.animal)
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
