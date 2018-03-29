import { Restaurante } from './../model/restaurante';
import { RestauranteService } from './../services/restaurante.service';
import { Route} from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.component.html',
  styleUrls: ['./restaurante-detail.component.css'],
  providers: [RestauranteService]
})
export class RestauranteDetailComponent implements OnInit {

  public id: string;
  public restaurante: Restaurante[];
  public errorMessage: string;
  public status: string;

  constructor(private rutaActiva: ActivatedRoute, private _restauranteService: RestauranteService, private ruta: Router) {
  }
  ngOnInit() {
    this.rutaActiva.params.subscribe(params => this.id = params.id);
    this.getRestaurante();
  }

  getRestaurante() {
    this._restauranteService.getRestaurante(this.id)
      .subscribe(response => {
        this.restaurante = response.data;
        this.status = response.status;
        console.log(this.restaurante);
        if (this.status !== 'success') {
          //alert('error en el sv');
          this.ruta.navigate(['/']);
        }
      },
        error => {
          this.errorMessage = <any>error;
          if (this.errorMessage !== null) {
            console.log('this.errorMessage');
            alert('Error en la peticion');
          }
        }
      );
  }
}
