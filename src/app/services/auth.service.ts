import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url : string = environment.apiurl

  get isConnected() : boolean {
    return localStorage.getItem("token") != undefined
  }

  isConnectedSubject : Subject<boolean> = new Subject<boolean>()

  emitConnectionSuject() {
    this.isConnectedSubject.next(this.isConnected)
  }

  constructor(
    private client : HttpClient
  ) { }


  login(email : string, pwd : string) {
    this.client.post(this.url + "user/login",
      {email : email, password : pwd},
      {responseType : 'text'}).subscribe({
        next : (token) => {
          console.log(token)
          localStorage.setItem("token", token)
          this.emitConnectionSuject()

        }
      })
  }

  logout() {
    localStorage.clear()
    this.emitConnectionSuject()
  }

  getUserList() : Observable<any> {
    // let myHeader = new HttpHeaders({
    //   'authorization' : 'bearer ' + localStorage.getItem("token")
    //  })
    // remplacé par TokenInterceptor
    return this.client.get<any>(this.url + "user"
      //  {headers : myHeader}
      )
  }
}
