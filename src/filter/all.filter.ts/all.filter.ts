import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { LoggerService } from '../../services/logger.service';

@Catch()
export class AllFilter implements ExceptionFilter {
  constructor(private loggerService: LoggerService) { }

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(500).json({
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      message: exception.message,
    });
  }
}
