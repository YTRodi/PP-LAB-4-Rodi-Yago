import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { Country } from 'src/app/interfaces/country';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-movie',
  templateUrl: './actor-movie.component.html',
  styleUrls: ['./actor-movie.component.css'],
})
export class ActorMovieComponent implements OnInit {
  public actorsList: Actor[] | null = null;
  public selectedActor: Actor | null = null;
  public selectedActorNacionality: Country | null = null;

  constructor(private actorsService: ActorService) {
    this.actorsService.getAllActores().subscribe((actorsList) => {
      this.actorsList = actorsList;
    });
  }

  ngOnInit(): void {}

  loadSelectedActor(selectedActor: Actor) {
    this.selectedActor = selectedActor;
  }

  loadSelectedActorNacionality(selectedActorNacionality: Country) {
    this.selectedActorNacionality = selectedActorNacionality;
  }
}
