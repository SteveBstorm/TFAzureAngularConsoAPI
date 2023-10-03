import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { LoginComponent } from './components/login/login.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  {path : "list", component : MovielistComponent},
  {path : "detail/:id", component : MoviedetailComponent},
  {path : "login", component : LoginComponent},
  {path : "userlist", /*canActivate : [authGuard],*/ component : UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
