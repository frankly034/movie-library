import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import GenreService from './genre/genre.service';
import MovieService from './movie/movie.service';

describe('App', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: GenreService,
          useValue: {},
        },
        {
          provide: MovieService,
          useValue: {},
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('App Controller', () => {
    it('should return app description', () => {
      expect(appController.getAppDescription()).toEqual({
        version: 1.0,
        appName: 'Entain Movie Library',
        description: 'This is a simple movie service for Entain movies',
      });
    });
  });

  describe('App Service', () => {
    it('should return app description', () => {
      expect(appService.getAppDescription()).toEqual({
        version: 1.0,
        appName: 'Entain Movie Library',
        description: 'This is a simple movie service for Entain movies',
      });
    });
  });
});
