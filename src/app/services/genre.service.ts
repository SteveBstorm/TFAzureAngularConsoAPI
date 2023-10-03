import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env';
import { Genre, Person } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private url : string = environment.apiurl

  constructor(
    private client : HttpClient
  ) { }

  getGenre() : Observable<Genre[]> {
    return this.client.get<Genre[]>(this.url + "genre")
  }
}
