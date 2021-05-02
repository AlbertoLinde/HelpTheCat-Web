import { Component, OnInit } from '@angular/core';
import { Asociacion } from 'src/app/models/asociacion.model';
import { AsociacionService } from 'src/app/services/asociacion.service';

@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html',
  styleUrls: ['./asociaciones.component.css']
})
export class AsociacionesComponent implements OnInit {

  asociaciones: Asociacion[] = [];

  constructor(private asociacionService: AsociacionService) { }

  ngOnInit(): void {
    this.asociacionService.getAsociaciones()
      .subscribe(resp => {
        this.asociaciones = resp;

        console.log("ASOCIACIONES" + resp)

      })
  }

}
