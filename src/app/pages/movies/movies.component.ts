import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { Movie } from 'src/app/interfaces/movie';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  // public movieList: Movie[] | null = null;
  public actorsList: Actor[] | null = null;
  public selectedActor: Actor | null = null;

  constructor(private actorService: ActorService) {
    this.actorService.getAllActores().subscribe((actorsList) => {
      this.actorsList = actorsList;
    });
  }

  ngOnInit(): void {}

  loadSelectedActor(selectedActor: Actor) {
    this.selectedActor = selectedActor;
  }
}
