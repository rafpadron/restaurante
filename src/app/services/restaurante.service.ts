import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import {Restaurante} from '../model/restaurante';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestauranteService {

  constructor(private _http: HttpClient) { }

  getRestaurante() {
    return this._http.get('http://192.168.7.105/api-rest/restaurantes-api.php/restaurantes')
              .toPromise();
  }
}
