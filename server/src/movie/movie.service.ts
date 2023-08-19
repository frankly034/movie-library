import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ILike, Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

import Movie from './movie.entity';
import { GenreLinkedList, MappedMovie } from '../common/types';
import CustomBadRequestException from '../common/exceptions/customBadRequestException';
import { NOT_NULL_VIOLATION_CODE } from '../utils/postgresErrorCode/notNullViolationCode';
import sleep from '../utils/sleep';
import TMDBApiService from '../common/api/tmdbApi.service';

@Injectable()
class MovieService {
  private readonly logger = new Logger(MovieService.name);

  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    readonly configService: ConfigService,
    readonly tmdbApiService: TMDBApiService,
  ) {}

  async findAll(
    options: IPaginationOptions = { limit: 10, page: 1 },
    search = '',
  ) {
    return paginate<Movie>(this.movieRepository, options, {
      order: { popularity: 'DESC' },
      where: { title: ILike(`%${search}%`) },
      relations: { genres: true },
    });
  }

  public async saveMovies(newMovies: MappedMovie[]): Promise<Movie[]> {
    const newMovieList = this.movieRepository.create(newMovies);

    try {
      await this.movieRepository.save(newMovieList);
      return newMovieList;
    } catch (error) {
      if (error?.code === NOT_NULL_VIOLATION_CODE) {
        this.logger.log(
          `Saving movies failed with NOT_NULL_VIOLATION_CODE from ${JSON.stringify(
            newMovieList,
          )}`,
        );
        throw new CustomBadRequestException('Title is required');
      }
      this.logger.error('An error occured saving movies', error);
      throw new InternalServerErrorException('An error occured');
    }
  }

  async loadMoviesFromTMDB(genreLinkedList: GenreLinkedList, pages = 100) {
    for (let page = 1; page <= pages; page++) {
      const movieList = await this.tmdbApiService.fetchMoviesFromTMDB(
        genreLinkedList,
        page,
      );
      try {
        await this.saveMovies(movieList);
        await sleep(1000);
      } catch (error) {
        this.logger.error('Failed while loading movies from TMDB');
      }
    }
  }
}

export default MovieService;
