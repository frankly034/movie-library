import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppDescription() {
    return {
      version: 1.0,
      appName: 'Entain Movie Library',
      description: 'This is a simple movie service for Entain movies',
    };
  }
}
