import { Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export default class CustomThrottlerGuard extends ThrottlerGuard {
  protected errorMessage = 'Too many requests';
}
