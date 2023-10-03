export interface Movie {
  id: number
  title: string
  synopsis: string
  idGenre: number
  genre? : Genre
  idRealisator: number
  realisator? : Person
  idScenarist: number
  scenarist? : Person
  releaseYear: number
  urlPoster: string
  urlTrailer: any
}

export interface Person {
  id : number
  firstname : string
  lastname : string
}

export interface Genre {
  id : number
  label : string
}
