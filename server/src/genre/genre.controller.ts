import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import GenreService from './genre.service';

@Controller('genres')
class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  getAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit,
  ) {
    limit = limit > 100 ? 100 : limit;
    return this.genreService.getAll({ limit, page });
  }
}

export default GenreController;
