import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RepartidoresComponent } from './pages/repartidores/repartidores.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [
    AltaRepartidorComponent,
    NavbarComponent,
    HomeComponent,
    RepartidoresComponent,
    CountryTableComponent,
  ],
  imports: [CommonModule, ProtectedRoutingModule, ReactiveFormsModule],
})
export class ProtectedModule {}
