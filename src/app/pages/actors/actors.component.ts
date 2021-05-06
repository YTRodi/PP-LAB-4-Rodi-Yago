import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { Country } from 'src/app/interfaces/country';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  public actorsList: Actor[] | null = null;
  public selectedActor: Actor | null = null;
  public selectedCountry: Country | null = null;

  constructor(private actorsService: ActorService) {
    this.actorsService.getAllActores().subscribe((actorsList) => {
      this.actorsList = actorsList;
    });
  }

  ngOnInit(): void {}

  loadSelectedActor(selectedActor: Actor) {
    this.selectedActor = selectedActor;
  }

  loadSelectedCountry(selectedCountry: Country) {
    this.selectedCountry = selectedCountry;
  }
}
