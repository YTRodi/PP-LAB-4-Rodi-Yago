import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css'],
})
export class SearchMovieComponent implements OnInit {
  public movieList: Movie[] | null = null;
  public selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService) {
    this.movieService.getAllMovies().subscribe((movieList) => {
      this.movieList = movieList;
    });
  }

  ngOnInit(): void {}

  loadSelectedMovie(selectedMovie: Movie) {
    this.selectedMovie = selectedMovie;
  }
}
