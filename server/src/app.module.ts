import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';

import { AppController } from './app.controller';
import DatabaseModule from './database/database.module';
import GenereModule from './genre/genre.module';
import MovieModule from './movie/movie.module';
import CustomThrottlerGuard from './common/guards/customThrottler.guard';
import { CustomExceptionFilter } from './common/exceptions/CustomExceptionFilters';
import { ResponseFormatInterceptor } from './common/interceptors/responseFormat.interceptor';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PGADMIN_DEFAULT_EMAIL: Joi.string().required(),
        PGADMIN_DEFAULT_PASSWORD: Joi.string().required(),
        PORT: Joi.number(),
        THROTTLE_TTL: Joi.number().required(),
        THROTTLE_LIMIT: Joi.number().required(),
        TMDB_BASEURL: Joi.string().required(),
        TMDB_BASE_IMAGE_URL: Joi.string().required(),
      }),
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('THROTTLE_TTL'),
        limit: config.get('THROTTLE_LIMIT'),
      }),
    }),
    DatabaseModule,
    GenereModule,
    MovieModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: CustomThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseFormatInterceptor,
    },
  ],
})
export class AppModule {}
