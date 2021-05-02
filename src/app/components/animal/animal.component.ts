import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/models/animal.model';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animal: Animal = new Animal();
  fileInput: File = null;

  constructor(private route: ActivatedRoute, private animalService: AnimalService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.animalService.getAnimal(id)
        .subscribe((resp: Animal) => {
          this.animal = resp;
          this.animal.id = id;
        });
    }
  }

  saveAnimal(form: NgForm) {


    if (this.animal.id) {
      this.animalService.updateAnimal(this.animal)
        .subscribe(resp => {
          console.log("RESPUESTA_______" + JSON.stringify(resp));
        });
    } else {
      this.animalService.newAnimal(this.animal)
        .subscribe(resp => {
          console.log(resp);
          this.animal = resp;
        });
    }
  }


}
