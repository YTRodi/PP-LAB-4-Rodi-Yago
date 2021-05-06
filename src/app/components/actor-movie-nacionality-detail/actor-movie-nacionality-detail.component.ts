import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-actor-movie-nacionality-detail',
  templateUrl: './actor-movie-nacionality-detail.component.html',
  styleUrls: ['./actor-movie-nacionality-detail.component.css'],
})
export class ActorMovieNacionalityDetailComponent implements OnInit {
  @Input() countryToShow: Country | null = null;
  public title: string = 'Detalle Pais natal';

  constructor() {}

  ngOnInit(): void {}
}
