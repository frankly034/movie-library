import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

import GenreService from './genre/genre.service';
import MovieService from './movie/movie.service';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(
    readonly genreService: GenreService,
    readonly movieService: MovieService,
  ) {}

  async onModuleInit() {
    const foundGenres = await this.genreService.getAll();

    if (foundGenres.items.length) {
      this.logger.log('Database already seeded...');

      return;
    }

    this.logger.log(
      'Database seeding starting. This may take a few minutes...',
    );

    const genres = await this.genreService.seedGenreFromTMDB();
    const genreLinkedList = this.genreService.extractGenreLinkedList(genres);

    await this.movieService.seedMoviesFromTMDB(genreLinkedList);

    this.logger.log('Database seeding completed..');
  }

  getAppDescription() {
    return {
      version: 1.0,
      appName: 'Entain Movie Library',
      description: 'This is a simple movie service for Entain movies',
    };
  }
}
