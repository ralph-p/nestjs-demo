import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { OddNumberError } from '../../exceptions/odd-number.error';
import { LoggerService } from '../../services/logger.service';

@Catch(OddNumberError)
export class OddFilter implements ExceptionFilter {
  constructor(private loggerService: LoggerService) { }

  catch(exception: OddNumberError, host: ArgumentsHost) {
    this.loggerService.log(OddFilter.name, 'CAUGHT ERROR!');
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(400).json({
      statusCode: 400,
      message: `You must enter only even numbers. ${exception.input} is odd.`,
    });
  }
}
