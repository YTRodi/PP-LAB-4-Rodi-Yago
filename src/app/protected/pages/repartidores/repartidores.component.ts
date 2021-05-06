import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-repartidores',
  templateUrl: './repartidores.component.html',
  styleUrls: ['./repartidores.component.css'],
})
export class RepartidoresComponent implements OnInit {
  public selectedCountry: Country | null = null;

  constructor() {}

  ngOnInit(): void {}

  loadSelectedCountry(selectedCountry: Country) {
    this.selectedCountry = selectedCountry;
  }
}
