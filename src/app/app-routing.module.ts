import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './components/movielist/movielist.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path : "list", component : MovielistComponent},
  {path : "detail/:id", component : MoviedetailComponent},
  {path : "login", component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
