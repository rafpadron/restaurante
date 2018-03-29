import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RestauranteService} from '../services/restaurante.service';
import { Restaurante } from '../model/restaurante';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  providers: [RestauranteService]
})
export class RestaurantListComponent implements OnInit {

  titulo = 'Lista de Restaurantes';
  errorMessage: string;
  status: string;
  restaurantes: Restaurante[];
  constructor(private _restauranteService: RestauranteService) {}

  ngOnInit() {
      this.getRestaurantes();
    console.log('restaurantes-list cargado');
  }
  getRestaurantes() {
    let box_restaurantes = <HTMLElement>document.querySelector('#restaurantes-list .loading');
    box_restaurantes.style.visibility = 'visible';
    setTimeout(() => {
    }, 10000);
    this._restauranteService.getRestaurantes()
    .subscribe(result => {
      this.restaurantes = result.data;
      this.status = result.status;

      if (this.status !== 'success') {
        alert('error en el sv');
      }
      box_restaurantes.style.display = 'none';
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
