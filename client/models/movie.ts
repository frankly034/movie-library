import Genre from "./genre";

interface Movie {
  id: string;
  backdropPath?: string;
  title: string;
  overview: string;
  voteAverage: string;
  voteCount: number;
  popularity: string;
  posterPath: string;
  releaseDate: string;
  genres: Genre[];
}

export default Movie;
