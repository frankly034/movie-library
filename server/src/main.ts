import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(compression());
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);

  const port = configService.get('PORT') ?? 3000;

  await app.listen(port);
}
bootstrap();
