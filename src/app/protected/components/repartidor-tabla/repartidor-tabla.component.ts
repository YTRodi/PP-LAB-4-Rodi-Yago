import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { Repartidor } from 'src/app/interfaces/repartidor';

@Component({
  selector: 'app-repartidor-tabla',
  templateUrl: './repartidor-tabla.component.html',
  styleUrls: ['./repartidor-tabla.component.css'],
})
export class RepartidorTablaComponent implements OnInit {
  @Input() repartidorList: Repartidor[] | null = null;
  @Output() eventSelectedRepartidor: EventEmitter<Repartidor>;

  constructor() {
    this.eventSelectedRepartidor = new EventEmitter<Repartidor>();
  }

  ngOnInit(): void {}

  selectRepartidor(selectedRepartidor: Repartidor) {
    this.eventSelectedRepartidor.emit(selectedRepartidor);
  }
}
