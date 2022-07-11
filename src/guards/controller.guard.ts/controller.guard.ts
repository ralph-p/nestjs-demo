import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LoggerService } from '../../services/logger.service';
import { Request, Response } from 'express';

@Injectable()
export class ControllerGuard implements CanActivate {
  constructor(private loggerService: LoggerService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const request = context.switchToHttp().getRequest() as Request;
    const canAccess = true;
    this.loggerService.log(ControllerGuard.name, `canAccess: ${canAccess}`);

    return canAccess;
  }
}
