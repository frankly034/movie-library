import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ILike, In, Repository } from 'typeorm';
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
    genres = [],
  ) {
    return paginate<Movie>(this.movieRepository, options, {
      order: { popularity: 'DESC' },
      where: {
        title: ILike(`%${search}%`),
        ...(genres.length && { genres: { id: In(genres) } }),
      },
      relations: { genres: true },
    });
  }

  async findOne(id: string) {
    return this.movieRepository.findOne({
      where: { id },
      relations: { genres: true },
    });
  }

  public async saveMovies(mappedMovies: MappedMovie[]): Promise<Movie[]> {
    const newMovies = this.movieRepository.create(mappedMovies);
    try {
      await this.movieRepository.save(newMovies);
      return newMovies;
    } catch (error) {
      if (error?.code === NOT_NULL_VIOLATION_CODE) {
        this.logger.log(
          `Saving movies failed with NOT_NULL_VIOLATION from ${JSON.stringify(
            mappedMovies,
          )}`,
        );
        throw new CustomBadRequestException('Title is required');
      }
      this.logger.error('An error occured saving movies', error);
      throw new InternalServerErrorException('An error occured');
    }
  }

  async seedMoviesFromTMDB(genreLinkedList: GenreLinkedList, pages = 100) {
    this.logger.log(`Seeding about ${pages * 20} records. Please be patient.`);

    for (let page = 1; page <= pages; page++) {
      const mappedMovieList = await this.tmdbApiService.fetchMoviesFromTMDB(
        genreLinkedList,
        page,
      );

      try {
        await this.saveMovies(mappedMovieList);

        this.logger.log(`${((page / pages) * 100).toFixed(2)}% done`);

        await sleep(1000);
      } catch (error) {
        this.logger.error('Failed while loading movies from TMDB');
      }
    }
  }
}

export default MovieService;
