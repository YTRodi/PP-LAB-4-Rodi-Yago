import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';
import { Country } from 'src/app/interfaces/country';

@Component({
  selector: 'app-actor-full-table',
  templateUrl: './actor-full-table.component.html',
  styleUrls: ['./actor-full-table.component.css'],
})
export class ActorFullTableComponent implements OnInit {
  @Input() actorsList: Actor[] | null = null;
  @Output() eventSelectedActor: EventEmitter<Actor>;
  @Output() eventSelectedActorNacionality: EventEmitter<Country>;

  constructor() {
    this.eventSelectedActor = new EventEmitter<Actor>();
    this.eventSelectedActorNacionality = new EventEmitter<Country>();
  }

  ngOnInit(): void {}

  selectActor(selectedActor: Actor) {
    this.eventSelectedActor.emit(selectedActor);
  }

  selectActorNacionality(selectedActorNacionality: Country) {
    this.eventSelectedActorNacionality.emit(selectedActorNacionality);
  }
}
