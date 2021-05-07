import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepartidoresComponent } from './pages/repartidores/repartidores.component';
import { ListaRepartidoresComponent } from './pages/lista-repartidores/lista-repartidores.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'alta-repartidor', component: RepartidoresComponent },
      { path: 'tabla-repartidores', component: ListaRepartidoresComponent },
      // { path: '**', redirectTo: 'alta-repartidor' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
