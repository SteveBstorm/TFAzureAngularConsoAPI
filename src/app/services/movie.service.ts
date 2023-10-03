import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url : string = environment.apiurl

  constructor(
    private client : HttpClient
  ) { }

  getAllMovie() : Observable<Movie[]> {
    return this.client.get<Movie[]>(this.url+"movie")
  }

  getById(id : number) : Observable<Movie> {
    return this.client.get<Movie>(this.url + "movie/"+id)
  }
}
