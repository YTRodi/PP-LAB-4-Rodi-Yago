import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repartidor } from '../interfaces/repartidor';

@Injectable({
  providedIn: 'root',
})
export class RepartidorService {
  private repartidoresCollection: AngularFirestoreCollection<Repartidor>;
  private nameCollectionDB = 'repartidores';

  constructor(private afs: AngularFirestore) {
    this.repartidoresCollection = afs.collection<Repartidor>(
      this.nameCollectionDB
    );
  }

  public getAllRepartidores(): Observable<Repartidor[]> {
    return this.afs
      .collection(this.nameCollectionDB)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((actor) => {
            const id = actor.payload.doc.id;
            const data = actor.payload.doc.data() as Repartidor;

            return { id, ...data };
          })
        )
      );
  }

  public addRepartidor(repartidor: Repartidor) {
    return this.repartidoresCollection.add(repartidor);
  }
}
