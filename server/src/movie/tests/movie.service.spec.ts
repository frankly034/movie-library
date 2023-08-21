import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import Movie from '../movie.entity';
import MovieService from '../movie.service';
import TMDBApiService from '../../common/api/tmdbApi.service';
import mockedConfigService from '../../utils/mocks/config.service';
import {
  mockMovieData,
  mockExpectedMovieData,
} from '../../utils/mocks/movie.mock';
import NotNullViolationError from '../../utils/mocks/notNullViolationException';
import { genreLinkedListMock } from '../../utils/mocks/genre.mock';
import paginateRepositoryMock from '../../utils/mocks/paginateRepositoryMock';

describe('Movie Service', () => {
  let movieService: MovieService;
  let tmdbApiService: TMDBApiService;

  let create: jest.Mock;
  let save: jest.Mock;

  beforeEach(async () => {
    create = jest.fn();
    save = jest.fn();

    const module = await Test.createTestingModule({
      providers: [
        MovieService,
        {
          provide: getRepositoryToken(Movie),
          useValue: {
            create,
            save,
            ...paginateRepositoryMock([mockExpectedMovieData]),
          },
        },
        {
          provide: ConfigService,
          useValue: mockedConfigService,
        },
        {
          provide: TMDBApiService,
          useValue: { fetchMoviesFromTMDB: jest.fn() },
        },
      ],
    }).compile();

    movieService = module.get<MovieService>(MovieService);
    tmdbApiService = module.get<TMDBApiService>(TMDBApiService);
  });

  describe('when saving movies', () => {
    it('should return newly saved movies', async () => {
      create.mockReturnValue([mockExpectedMovieData]);
      const newMovies = await movieService.saveMovies([mockMovieData]);

      expect(newMovies).toEqual([mockExpectedMovieData]);
    });
    it('should handle NOT_NULL_VIOLATION error', async () => {
      save.mockImplementation(() => {
        throw new NotNullViolationError();
      });
      await expect(
        movieService.saveMovies([mockMovieData]),
      ).rejects.toThrowError('Title is required');
    });
    it('should handle other errors', async () => {
      save.mockImplementation(() => {
        throw new Error();
      });
      await expect(
        movieService.saveMovies([mockMovieData]),
      ).rejects.toThrowError('An error occured');
    });
  });

  // loadMoviesFromTMDB with page=1 to prevent timeouts
  describe('when loading movies from TMDB', () => {
    it('should fetch movies from TMDB', async () => {
      const fetchMoviesFromTMDBSpy = jest
        .spyOn(tmdbApiService, 'fetchMoviesFromTMDB')
        .mockResolvedValue([]);

      await movieService.seedMoviesFromTMDB(genreLinkedListMock, 1);

      expect(fetchMoviesFromTMDBSpy).toHaveBeenCalledTimes(1);
    });

    it('should save the movies', async () => {
      const saveMoviesSpy = jest.spyOn(movieService, 'saveMovies');
      await movieService.seedMoviesFromTMDB(genreLinkedListMock, 1);

      expect(saveMoviesSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('when fetching all movies', () => {
    it('should return a paginated list of movies', async () => {
      const allMovies = await movieService.findAll();

      expect(allMovies.items).toEqual([mockExpectedMovieData]);
      expect(allMovies.meta.currentPage).toEqual(1);
      expect(allMovies.meta.itemsPerPage).toEqual(10);
      expect(allMovies.meta.itemCount).toEqual(1);
    });
  });
});
