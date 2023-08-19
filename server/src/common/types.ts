import Genre from '../genre/genre.entity';

export type GenreLinkedList = Record<number, Genre>;

export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBGenreResponse {
  genres: TMDBGenre[];
}

export interface UnMappedGenre {
  id: number;
  name: string;
}

export interface MappedGenre {
  tmbdId: number;
  name: string;
}

export interface TMDBMovieResponse {
  results: UnMappedMovie[];
}

export interface UnMappedMovie {
  genre_ids: number[];
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface MappedMovie {
  title: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  genres: Genre[];
}
