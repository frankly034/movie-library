import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import Genre from './genre.entity';
import GenreService from './genre.service';
import GenreController from './genre.controller';
import Movie from '../movie/movie.entity';
import TMDBApiService from '../common/api/tmdbApi.service';

@Module({
  controllers: [GenreController],
  exports: [GenreService],
  imports: [TypeOrmModule.forFeature([Genre, Movie]), ConfigModule],
  providers: [GenreService, TMDBApiService],
})
export default class GenereModule {}
