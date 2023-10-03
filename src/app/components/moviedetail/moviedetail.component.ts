import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Genre, Movie, Person } from 'src/app/models/movie.model';
import { GenreService } from 'src/app/services/genre.service';
import { MovieService } from 'src/app/services/movie.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent {

  currentId! : number

  currentMovie! : Movie

  constructor(
    private ar : ActivatedRoute,
    private movieService : MovieService,
    private dom : DomSanitizer,
    private personService : PersonService,
    private genreService : GenreService
  ){}

  ngOnInit() {
   this.currentId = this.ar.snapshot.params["id"]
   console.log(this.currentId)

   this.movieService.getById(this.currentId).subscribe({
      next : (data : Movie) => {
        this.currentMovie = data
        this.currentMovie.urlTrailer = this.dom.bypassSecurityTrustResourceUrl(this.currentMovie.urlTrailer.replace("watch?v=", "embed/"))

        this.personService.getPersonById(this.currentMovie.idRealisator).subscribe({
          next : (p : Person) => this.currentMovie.realisator = p
        })

        this.personService.getPersonById(this.currentMovie.idScenarist).subscribe({
          next : (p : Person) => this.currentMovie.scenarist = p
        })

        this.genreService.getGenre().subscribe({
          next : (liste : Genre[]) => {
            this.currentMovie.genre = liste.find(x => x.id == this.currentMovie.idGenre)
          }
        })

      }
   })
  }
}
