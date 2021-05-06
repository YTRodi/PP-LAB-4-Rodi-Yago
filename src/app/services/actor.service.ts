import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Actor } from '../interfaces/actor';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActorService {
  private actoresCollection: AngularFirestoreCollection<Actor>;
  private nameCollectionDB = 'actores';

  constructor(private afs: AngularFirestore) {
    this.actoresCollection = afs.collection<Actor>(this.nameCollectionDB);
  }

  public getAllActores(): Observable<Actor[]> {
    return this.afs
      .collection(this.nameCollectionDB)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((actor) => {
            const id = actor.payload.doc.id;
            const data = actor.payload.doc.data() as Actor;

            return { id, ...data };
          })
        )
      );
  }

  public addActor(actor: Actor) {
    return this.actoresCollection.add(actor);
  }
}
