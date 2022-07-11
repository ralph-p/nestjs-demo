import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSecret(): string {
    return 'super secret';
  }
  getBye(): string {
    return 'Good Bye!';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
