import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

const rutas: Routes = [
    {path: '', component: RestaurantListComponent},
    {path: 'restaurante/:id', component: RestauranteDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
