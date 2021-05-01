import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Asociacion } from 'src/app/models/asociacion.model';
import { AsociacionService } from 'src/app/services/asociacion.service';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.css']
})
export class AsociacionComponent implements OnInit {

  asociacion: Asociacion = new Asociacion();

  constructor(private asociacionService: AsociacionService) { }

  ngOnInit(): void {
  }

  saveAsociacion(form: NgForm) {
    this.asociacionService.newAsociacion(this.asociacion)
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
