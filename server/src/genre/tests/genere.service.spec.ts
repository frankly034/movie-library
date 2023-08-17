import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import Genre from '../genre.entity';
import GenreService from '../genre.service';
import { expectedGenreMock, genreMockData } from '../../utils/mocks/genre.mock';
import UniqueViolationError from '../../utils/mocks/uniqueViolationException';
import paginateRepositoryMock from '../../utils/mocks/paginateRepositoryMock';

describe('Genere Service', () => {
  let genreService: GenreService;

  let create: jest.Mock;
  let save: jest.Mock;

  beforeEach(async () => {
    create = jest.fn();
    save = jest.fn();

    const module = await Test.createTestingModule({
      providers: [
        GenreService,
        {
          provide: getRepositoryToken(Genre),
          useValue: {
            create,
            save,
            ...paginateRepositoryMock([expectedGenreMock]),
          },
        },
      ],
    }).compile();

    genreService = module.get<GenreService>(GenreService);
  });

  describe('when creating a new genre', () => {
    describe('and input is valid', () => {
      beforeEach(() => {
        create.mockReturnValue(expectedGenreMock);
      });

      it('should return created genre', async () => {
        const newGenre = await genreService.create(genreMockData);
        expect(newGenre).toEqual(expectedGenreMock);
      });
    });

    describe('and input is not valid', () => {
      it('should throw error for duplicate', async () => {
        create.mockReturnValue(expectedGenreMock);
        save.mockImplementation(() => {
          throw new UniqueViolationError('Currency already exists');
        });
        await expect(genreService.create(genreMockData)).rejects.toThrowError(
          'Genre already exists',
        );
      });

      it('should throw error if database update fails', async () => {
        create.mockReturnValue(expectedGenreMock);
        save.mockImplementation(() => {
          throw new Error();
        });
        await expect(genreService.create(genreMockData)).rejects.toThrowError(
          'An error occured',
        );
      });
    });
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
});
