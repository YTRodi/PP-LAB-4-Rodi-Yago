import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/interfaces/actor';

@Component({
  selector: 'app-actor-movie-detail',
  templateUrl: './actor-movie-detail.component.html',
  styleUrls: ['./actor-movie-detail.component.css'],
})
export class ActorMovieDetailComponent implements OnInit {
  @Input() actorToShow: Actor | null = null;
  public title: string = 'Detalle Actor';

  constructor() {}

  ngOnInit(): void {}
}
