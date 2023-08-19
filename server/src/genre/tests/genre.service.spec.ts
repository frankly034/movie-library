import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

import Genre from '../genre.entity';
import GenreService from '../genre.service';
import {
  expectedGenreMock,
  mockTMBDGenres,
} from '../../utils/mocks/genre.mock';
import paginateRepositoryMock from '../../utils/mocks/paginateRepositoryMock';
import mockedConfigService from '../../utils/mocks/config.service';
import UniqueViolationError from '../../utils/mocks/uniqueViolationException';
import TMDBApiService from '../../common/api/tmdbApi.service';

jest.mock('axios');

describe('Genere Service', () => {
  let genreService: GenreService;
  let tmdbApiService: TMDBApiService;

  let create: jest.Mock;
  let findBy: jest.Mock;
  let save: jest.Mock;

  beforeEach(async () => {
    create = jest.fn();
    findBy = jest.fn();
    save = jest.fn();

    const module = await Test.createTestingModule({
      providers: [
        GenreService,
        {
          provide: getRepositoryToken(Genre),
          useValue: {
            create,
            findBy,
            save,
            ...paginateRepositoryMock([expectedGenreMock]),
          },
        },
        {
          provide: ConfigService,
          useValue: mockedConfigService,
        },
        {
          provide: TMDBApiService,
          useValue: { fetchGenresFromTMDB: jest.fn() },
        },
      ],
    }).compile();

    genreService = module.get<GenreService>(GenreService);
    tmdbApiService = module.get<TMDBApiService>(TMDBApiService);
  });

  describe('when fetching all genres', () => {
    it('should return a paginated list of genres', async () => {
      const allGenres = await genreService.getAll();

      expect(allGenres.items).toEqual([expectedGenreMock]);
      expect(allGenres.meta.currentPage).toEqual(1);
      expect(allGenres.meta.itemsPerPage).toEqual(10);
      expect(allGenres.meta.itemCount).toEqual(1);
    });
  });

  describe('when extracting genre linked list', () => {
    it('should return an genre linked list with tmdbId keys', () => {
      const genreLinkedList = genreService.extractGenreLinkedList([
        expectedGenreMock as Genre,
      ]);

      expect(genreLinkedList).toEqual({
        [expectedGenreMock.tmbdId]: expectedGenreMock,
      });
    });
  });

  describe('when loading genre data from TMDB', () => {
    beforeEach(() => {
      jest
        .spyOn(tmdbApiService, 'fetchGenresFromTMDB')
        .mockResolvedValue(mockTMBDGenres);
    });
    it('should load and save genres from TMDB', async () => {
      create.mockReturnValue(mockTMBDGenres);
      save.mockResolvedValue(mockTMBDGenres);

      const result = await genreService.seedGenreFromTMDB();

      expect(result).toEqual(mockTMBDGenres);
    });

    it('should handle UNIQUE_VIOLATION_CODE error', async () => {
      create.mockReturnValue([]);
      save.mockRejectedValue(
        new UniqueViolationError('Genre with name or tmbdId already exists'),
      );

      await expect(genreService.seedGenreFromTMDB()).rejects.toThrowError(
        'Genre with name or tmbdId already exists',
      );
    });

    it('should handle other errors', async () => {
      create.mockReturnValue([]);
      save.mockRejectedValue(new Error());

      await expect(genreService.seedGenreFromTMDB()).rejects.toThrowError(
        'An error occured',
      );
    });
  });
});
