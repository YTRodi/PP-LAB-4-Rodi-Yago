import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css'],
})
export class MovieTableComponent implements OnInit {
  @Input() movieList: Movie[] | null = null;
  @Output() eventSelectedMovie: EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor() {}

  ngOnInit(): void {}

  selectMovie(selectedMovie: Movie) {
    this.eventSelectedMovie.emit(selectedMovie);
  }
}
