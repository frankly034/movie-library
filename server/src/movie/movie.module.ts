import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import Genre from '../genre/genre.entity';
import Movie from './movie.entity';
import MovieService from './movie.service';
import MovieController from './movie.controller';
import TMDBApiService from '../common/api/tmdbApi.service';

@Module({
  controllers: [MovieController],
  exports: [MovieService],
  imports: [TypeOrmModule.forFeature([Movie, Genre]), ConfigModule],
  providers: [MovieService, TMDBApiService],
})
export default class MovieModule {}
