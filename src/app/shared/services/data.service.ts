import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Character, DataResponse, Episode } from '../models/models';

const QUERY = gql `
  {
    episodes{
      results{
        name
        episode
      }
    }
    characters{
      results{
        id,
        name,
        status,
        species,
        gender
        image
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private episodeSubject = new BehaviorSubject<Episode[]>(null);
  private charactersSubject = new BehaviorSubject<Character[]>(null);

  episodes$ = this.episodeSubject.asObservable();
  characters$ = this.charactersSubject.asObservable();

  constructor( private apollo: Apollo) {
    this.getData();
  }

  private getData(): void {
    this.apollo.watchQuery<DataResponse>(
      {query: QUERY}
    ).valueChanges.pipe(
      take(1),
      tap( ({data}) => {
        const {episodes, characters} = data;
        this.episodeSubject.next(episodes.results);
        this.charactersSubject.next(characters.results);
      })
    ).subscribe();
  }
}
