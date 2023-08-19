import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { getRepositoryToken } from '@nestjs/typeorm';
import { INestApplication, ValidationPipe } from '@nestjs/common';

import MovieService from '../movie.service';
import Movie from '../movie.entity';
import paginateRepositoryMock from '../../utils/mocks/paginateRepositoryMock';
import { mockExpectedMovieData } from '../../utils/mocks/movie.mock';
import mockedConfigService from '../../utils/mocks/config.service';
import TMDBApiService from '../../common/api/tmdbApi.service';
import MovieController from '../movie.controller';

describe('Movie Controller', () => {
  let app: INestApplication;

  let create: jest.Mock;
  let save: jest.Mock;

  beforeEach(async () => {
    create = jest.fn();
    save = jest.fn();

    const module = await Test.createTestingModule({
      controllers: [MovieController],
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
    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  describe('when fetching all movies', () => {
    it('should return 200 and a paginated list of movies', () => {
      return request(app.getHttpServer())
        .get('/movies')
        .expect(200)
        .then((res) => {
          expect(res.body.items).toEqual([mockExpectedMovieData]);
          expect(res.body.meta.currentPage).toEqual(1);
          expect(res.body.meta.itemCount).toEqual(1);
          expect(res.body.meta.itemsPerPage).toEqual(10);
        });
    });
  });
});
