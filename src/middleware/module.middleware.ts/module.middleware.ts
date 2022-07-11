import { Request, Response } from 'express';

import { Injectable, NestMiddleware } from '@nestjs/common';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class ModuleMiddleware implements NestMiddleware {
  constructor(private loggerService: LoggerService) { }
  use(req: Request, res: Response, next: () => void) {
    this.loggerService.log(ModuleMiddleware.name, 'Start');
    this.loggerService.log(
      ModuleMiddleware.name,
      `Request: ${req.method} ${req.path}`,
    );

    next();
    this.loggerService.log(ModuleMiddleware.name, 'End');
  }
}
