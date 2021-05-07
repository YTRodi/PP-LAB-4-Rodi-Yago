import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/interfaces/repartidor';

@Component({
  selector: 'app-repartidor-detail',
  templateUrl: './repartidor-detail.component.html',
  styleUrls: ['./repartidor-detail.component.css'],
})
export class RepartidorDetailComponent implements OnInit {
  @Input() repartidorToShow: Repartidor | null = null;
  public title: string = 'Detalle Repartidor';

  constructor() {}

  ngOnInit(): void {}
}
