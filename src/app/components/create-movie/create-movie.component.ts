import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';
import { Actor } from 'src/app/interfaces/actor';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  @Input() selectedActor: Actor | null = null;
  public title: string = 'Alta de película';

  public formMovie: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.formMovie = this.fb.group({
      name: new FormControl('', [Validators.required]),
      type: new FormControl('Otros', [Validators.required]),
      releaseDate: new FormControl('', [Validators.required]),
      amountPublic: new FormControl(10, [
        Validators.required,
        Validators.min(10),
        Validators.max(50),
      ]),
      image: new FormControl('', [Validators.required]),
      alt: 'Image movie',
    });
  }

  ngOnInit(): void {}

  sendForm() {
    this.movieService.addMovie(<Movie>{
      ...this.formMovie.getRawValue(),
      actor: this.selectedActor,
    });

    this.selectedActor = null;
    this.formMovie.reset();

    Swal.fire(
      'Alta exitosa',
      'Se a agregado la película a la lista',
      'success'
    );
  }
}
