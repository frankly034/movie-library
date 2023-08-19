import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

import {
  GenreLinkedList,
  MappedGenre,
  MappedMovie,
  TMDBGenreResponse,
  TMDBMovieResponse,
  UnMappedGenre,
  UnMappedMovie,
} from '../types';

@Injectable()
export default class TMDBApiService {
  axiosInstance: AxiosInstance;

  constructor(readonly configService: ConfigService) {
    this.axiosInstance = axios.create({
      baseURL: configService.get('TMDB_BASEURL'),
      params: { api_key: this.configService.get('TMDB_API_KEY') },
    });
  }

  private mapGenre({ id, name }: UnMappedGenre): MappedGenre {
    return { tmbdId: id, name };
  }

  private mapMovie(
    unmappedMovie: UnMappedMovie,
    genreLinkedList: GenreLinkedList,
  ): MappedMovie {
    const {
      genre_ids,
      poster_path,
      release_date,
      vote_average,
      vote_count,
      overview,
      popularity,
      title,
    } = unmappedMovie;

    const genres = genre_ids
      .map((genreId) => genreLinkedList[genreId])
      .filter((genre) => genre);

    return {
      overview,
      popularity,
      title,
      genres,
      posterPath: `${this.configService.get(
        'TMDB_BASE_IMAGE_URL',
      )}${poster_path}`,
      releaseDate: release_date || null,
      voteAverage: vote_average,
      voteCount: vote_count,
    };
  }

  public async fetchGenresFromTMDB(): Promise<MappedGenre[]> {
    const {
      data: { genres },
    } = await this.axiosInstance.get<TMDBGenreResponse>('/genre/movie/list');

    return genres.map(this.mapGenre);
  }

  public async fetchMoviesFromTMDB(
    genreLinkedList: GenreLinkedList,
    page = 1,
  ): Promise<MappedMovie[]> {
    const {
      data: { results },
    } = await this.axiosInstance.get<TMDBMovieResponse>('/discover/movie', {
      params: { page },
    });

    return results.map((unmappedMovie: UnMappedMovie) =>
      this.mapMovie(unmappedMovie, genreLinkedList),
    );
  }
}
