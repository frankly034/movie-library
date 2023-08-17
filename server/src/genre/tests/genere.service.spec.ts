import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import Genre from '../genre.entity';
import GenreService from '../genre.service';
import { expectedGenreMock, genreMockData } from '../../utils/mocks/genre.mock';
import UniqueViolationError from '../../utils/mocks/uniqueViolationException';

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
          useValue: { create, save },
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
});
