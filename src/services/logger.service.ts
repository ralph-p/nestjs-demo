import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(name: string, message: string) {
    console.log(`[${name}] ${message}`);
  }
}
