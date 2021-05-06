import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent implements OnInit {
  public countriesList: Country[] | null = null;
  @Output() eventSelectedCountry: EventEmitter<Country>;

  constructor(private countryService: CountryService) {
    this.eventSelectedCountry = new EventEmitter<Country>();

    this.countryService.getAllCountries().subscribe((countriesList: any) => {
      this.countriesList = countriesList;
    });
  }

  ngOnInit(): void {}

  selectCountry(selectedCountry: Country) {
    this.eventSelectedCountry.emit(selectedCountry);
  }
}
