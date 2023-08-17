import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Genre from './genre.entity';
import GenreService from './genre.service';

@Module({
  controllers: [],
  exports: [GenreService],
  imports: [TypeOrmModule.forFeature([Genre])],
  providers: [GenreService],
})
export default class GenereModule {}
