import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent {

  movieList : Movie[] = []

  constructor(private movieService : MovieService){}

  ngOnInit() {
    this.movieService.getAllMovie().subscribe({
      next : (data : Movie[]) => {
        this.movieList = data
      }
    })
  }

}
