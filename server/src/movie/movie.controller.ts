import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';

import MovieService from './movie.service';

@Controller('movies')
class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit,
    @Query('search', new DefaultValuePipe('')) search,
  ) {
    limit = limit > 100 ? 100 : limit;
    return this.movieService.findAll({ limit, page }, search);
  }
}

export default MovieController;
