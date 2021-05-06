import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AltaRepartidorComponent } from './components/alta-repartidor/alta-repartidor.component';
import { RepartidoresComponent } from './pages/repartidores/repartidores.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'alta-repartidor', component: RepartidoresComponent },
      // { path: '**', redirectTo: 'alta-repartidor' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
