import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

import Genre from './genre.entity';
import CreateGenreDto from './dto/createGenre.dto';
import { UNIQUE_VIOLATION_CODE } from '../utils/postgresErrorCode/uniqueViolationCode';
import CustomBadRequestException from '../common/exceptions/customBadRequestException';

@Injectable()
class GenreService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async create(genreData: CreateGenreDto) {
    const newGenre = this.genreRepository.create(genreData);

    try {
      await this.genreRepository.save(newGenre);
    } catch (error) {
      if (error?.code === UNIQUE_VIOLATION_CODE) {
        throw new CustomBadRequestException('Genre already exists');
      }
      throw new InternalServerErrorException('An error occured');
    }

    return newGenre;
  }

  async getAll(options: IPaginationOptions = { limit: 10, page: 1 }) {
    return paginate<Genre>(this.genreRepository, options, {
      order: { name: 'ASC' },
    });
  }
}

export default GenreService;
