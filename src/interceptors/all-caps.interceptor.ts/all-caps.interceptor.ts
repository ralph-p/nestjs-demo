import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class AllCapsInterceptor implements NestInterceptor {
  constructor(private loggerService: LoggerService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.loggerService.log(AllCapsInterceptor.name, 'Start');
    return next.handle().pipe(
      tap((data) =>
        this.loggerService.log(AllCapsInterceptor.name, `Intercepted: ${data}`),
      ),
      map((data) => `${data.toUpperCase()}`),
    );
  }
}
