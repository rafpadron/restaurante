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

  restaurantes: Restaurante[];
  constructor(private _restauranteService: RestauranteService) {
    this._restauranteService.getRestaurante()
    .then((d: Restaurante[]) => {
      this.restaurantes = d;
    });
   }

  ngOnInit() { console.log('restaurantes-list cargado');
  }

}
