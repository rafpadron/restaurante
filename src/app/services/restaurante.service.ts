import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import {Restaurante} from '../model/restaurante';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestauranteService {

  constructor(private _http: HttpClient) { }

  getRestaurantes(): Observable<any> {
    return this._http.get(`http://localhost/api-rest/restaurantes-api.php/restaurantes`);
  }

  getRestaurante(id: string): Observable<any> {
    return this._http.get(`http://localhost/api-rest/restaurantes-api.php/restaurante/` + id);
  }
}
