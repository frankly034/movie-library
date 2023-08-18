import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';

export default class TMDBApi {
  axiosInstance: AxiosInstance;

  constructor(readonly configService: ConfigService) {
    this.axiosInstance = axios.create({
      baseURL: configService.get('TMDB_BASEURL'),
    });
  }
}
