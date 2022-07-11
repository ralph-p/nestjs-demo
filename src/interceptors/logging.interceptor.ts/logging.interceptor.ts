import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private loggerService: LoggerService) { }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    this.loggerService.log(LoggingInterceptor.name, 'Start');
    return next
      .handle()
      .pipe(
        tap((data) =>
          this.loggerService.log(
            LoggingInterceptor.name,
            `Intercepted: ${data}`,
          ),
        ),
      );
  }
}
