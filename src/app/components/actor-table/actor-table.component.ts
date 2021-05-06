import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';

@Component({
  selector: 'app-actor-table',
  templateUrl: './actor-table.component.html',
  styleUrls: ['./actor-table.component.css'],
})
export class ActorTableComponent implements OnInit {
  @Input() actorsList: Actor[] | null = null;
  @Output() eventSelectedActor: EventEmitter<Actor>;

  constructor() {
    this.eventSelectedActor = new EventEmitter<Actor>();
  }

  ngOnInit(): void {}

  selectActor(selectedActor: Actor) {
    this.eventSelectedActor.emit(selectedActor);
  }
}
