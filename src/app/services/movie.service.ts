import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movieCollection: AngularFirestoreCollection<Movie>;
  private nameCollectionDB = 'movies';

  constructor(private afs: AngularFirestore) {
    this.movieCollection = afs.collection<Movie>(this.nameCollectionDB);
  }

  public getAllMovies(): Observable<Movie[]> {
    return this.afs
      .collection(this.nameCollectionDB)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((movie) => {
            const id = movie.payload.doc.id;
            const data = movie.payload.doc.data() as Movie;

            return { id, ...data };
          })
        )
      );
  }

  public addMovie(movie: Movie) {
    return this.movieCollection.add(movie);
  }
}
