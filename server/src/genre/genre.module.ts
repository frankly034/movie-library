import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Genre from './genre.entity';
import GenreService from './genre.service';
import GenreController from './genre.controller';
import Movie from '../movie/movie.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [GenreController],
  exports: [GenreService],
  imports: [TypeOrmModule.forFeature([Genre, Movie]), ConfigModule],
  providers: [GenreService],
})
export default class GenereModule {}
