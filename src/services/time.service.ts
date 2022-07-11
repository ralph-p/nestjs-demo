import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
  getTime(): string {
    return new Date().toISOString();
  }
}
