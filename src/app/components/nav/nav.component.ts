import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isConnected! : boolean
  constructor(private authService : AuthService){}

  ngOnInit() {
    this.authService.isConnectedSubject.subscribe({
      next : (status : boolean) => this.isConnected = status
    })

    this.authService.emitConnectionSuject()
  }

  logout() {
    this.authService.logout()
  }
}
