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
