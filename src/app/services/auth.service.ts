import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url : string = environment.apiurl

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
        }
      })
  }
}
