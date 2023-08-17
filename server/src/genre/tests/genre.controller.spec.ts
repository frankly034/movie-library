import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { INestApplication, ValidationPipe } from '@nestjs/common';

import GenreService from '../genre.service';
import { expectedGenreMock } from '../../utils/mocks/genre.mock';
import Genre from '../genre.entity';
import GenreController from '../genre.controller';
import paginateRepositoryMock from '../../utils/mocks/paginateRepositoryMock';

describe('Genre Controller', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [GenreController],
      providers: [
        GenreService,
        {
          provide: getRepositoryToken(Genre),
          useValue: { ...paginateRepositoryMock([expectedGenreMock]) },
        },
      ],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());

    await app.init();
  });

  describe('when fetching all genres', () => {
    it('should return 200 and a paginated list of genres', () => {
      return request(app.getHttpServer())
        .get('/genres')
        .expect(200)
        .then((res) => {
          expect(res.body.items).toEqual([expectedGenreMock]);
          expect(res.body.meta.currentPage).toEqual(1);
          expect(res.body.meta.itemCount).toEqual(1);
          expect(res.body.meta.itemsPerPage).toEqual(10);
        });
    });
  });
});
