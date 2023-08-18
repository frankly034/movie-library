import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { ConfigService } from '@nestjs/config';

import Genre from './genre.entity';
import { UNIQUE_VIOLATION_CODE } from '../utils/postgresErrorCode/uniqueViolationCode';
import CustomBadRequestException from '../common/exceptions/customBadRequestException';
import TMDBApi from '../common/api/tmdb.api';
import { MappedGenre, TMDBGenreResponse, UnMappedGenre } from './types';

@Injectable()
class GenreService extends TMDBApi {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
    readonly configService: ConfigService,
  ) {
    super(configService);
  }

  async getAll(options: IPaginationOptions = { limit: 10, page: 1 }) {
    return paginate<Genre>(this.genreRepository, options, {
      order: { name: 'ASC' },
    });
  }

  public async fetchGenresFromTMDB(): Promise<MappedGenre[]> {
    const {
      data: { genres },
    } = await this.axiosInstance.get<TMDBGenreResponse>('/genre/movie/list', {
      params: { api_key: this.configService.get('TMDB_API_KEY') },
    });

    return genres.map(this.mapGenre);
  }

  private mapGenre({ id, name }: UnMappedGenre): MappedGenre {
    return { tmbdId: id, name };
  }

  public extractGenreLinkedList(genres: Genre[]) {
    return genres.reduce((acc, cur) => {
      return { ...acc, [cur.tmbdId]: cur };
    }, {});
  }

  async loadGenreFromTMDB() {
    const tmbdGenres = await this.fetchGenresFromTMDB();

    const newGenres = this.genreRepository.create(tmbdGenres);

    try {
      await this.genreRepository.save(newGenres);
    } catch (error) {
      if (error?.code === UNIQUE_VIOLATION_CODE) {
        throw new CustomBadRequestException(
          'Genre with name or tmbdId already exists',
        );
      }
      throw new InternalServerErrorException('An error occured');
    }

    return newGenres;
  }
}

export default GenreService;
