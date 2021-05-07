import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/interfaces/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-lista-repartidores',
  templateUrl: './lista-repartidores.component.html',
  styleUrls: ['./lista-repartidores.component.css'],
})
export class ListaRepartidoresComponent implements OnInit {
  public repartidorList: Repartidor[] | null = null;
  public selectedRpartidor: Repartidor | null = null;

  constructor(private repartidorService: RepartidorService) {
    this.repartidorService.getAllRepartidores().subscribe((repartidorList) => {
      console.log(repartidorList);
      this.repartidorList = repartidorList;
    });
  }

  ngOnInit(): void {}

  loadSelectedRepartidor(selectedRepartidor: Repartidor) {
    this.selectedRpartidor = selectedRepartidor;
  }
}
