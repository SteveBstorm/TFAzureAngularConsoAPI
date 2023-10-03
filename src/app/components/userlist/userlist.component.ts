import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent {

  liste : any = []

  constructor(private authService : AuthService){}

  ngOnInit(){
    this.authService.getUserList().subscribe({
      next : (liste : any) => this.liste = liste
    })
  }
}
