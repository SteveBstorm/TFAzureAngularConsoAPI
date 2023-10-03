import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/env';
import { Person } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private url : string = environment.apiurl

  constructor(
    private client : HttpClient
  ) { }

  getPersonById(id : number) : Observable<Person> {
    return this.client.get<Person>(this.url + "person/" +id)
  }
}
