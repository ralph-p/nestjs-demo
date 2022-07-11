import { Request, Response } from 'express';

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    const canAccess = request.params['deprecated'] !== 'true';
    console.log(`[GlobalGuard] canAccess: ${canAccess}`);

    return canAccess;
  }
}
