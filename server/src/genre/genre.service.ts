import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { ConfigService } from '@nestjs/config';

import Genre from './genre.entity';
import { GenreLinkedList } from '../common/types';
import TMDBApiService from '../common/api/tmdbApi.service';
import CustomBadRequestException from '../common/exceptions/customBadRequestException';
import { UNIQUE_VIOLATION_CODE } from '../utils/postgresErrorCode/uniqueViolationCode';
import { NOT_NULL_VIOLATION_CODE } from '../utils/postgresErrorCode/notNullViolationCode';

@Injectable()
class GenreService {
  private readonly logger = new Logger(GenreService.name);

  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
    readonly configService: ConfigService,
    readonly tmdbApiService: TMDBApiService,
  ) {}

  async getAll(options: IPaginationOptions = { limit: 10, page: 1 }) {
    return paginate<Genre>(this.genreRepository, options, {
      order: { name: 'ASC' },
    });
  }

  public extractGenreLinkedList(genres: Genre[]): GenreLinkedList {
    return genres.reduce((acc, cur) => {
      return { ...acc, [cur.tmbdId]: cur };
    }, {});
  }

  async seedGenreFromTMDB() {
    const tmbdGenres = await this.tmdbApiService.fetchGenresFromTMDB();

    const newGenres = this.genreRepository.create(tmbdGenres);

    try {
      await this.genreRepository.save(newGenres);
    } catch (error) {
      if (error?.code === UNIQUE_VIOLATION_CODE) {
        this.logger.log(
          `Saving genres failed with UNIQUE_VIOLATION from ${JSON.stringify(
            newGenres,
          )}`,
        );
        throw new CustomBadRequestException(
          'Genre with name or tmbdId already exists',
        );
      }
      if (error?.code === NOT_NULL_VIOLATION_CODE) {
        this.logger.log(
          `Saving genres failed with NOT_NULL_VIOLATION from ${JSON.stringify(
            newGenres,
          )}`,
        );
        throw new CustomBadRequestException('Name is required');
      }
      this.logger.error('An error occured saving genres', error);
      throw new InternalServerErrorException('An error occured');
    }

    return newGenres;
  }
}

export default GenreService;
