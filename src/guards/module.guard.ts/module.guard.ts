import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from '../../services/logger.service';
import { Request, Response } from 'express';

@Injectable()
export class ModuleGuard implements CanActivate {
  constructor(private loggerService: LoggerService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    const canAccess = request.params['deprecated'] !== 'true';
    this.loggerService.log(ModuleGuard.name, `canAccess: ${canAccess}`);

    return canAccess;
  }
}
