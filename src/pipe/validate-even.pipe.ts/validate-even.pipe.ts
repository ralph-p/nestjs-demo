import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { OddNumberError } from '../../exceptions/odd-number.error';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class ValidateEvenPipe implements PipeTransform {
  constructor(private loggerService: LoggerService) { }

  transform(value: any, metadata: ArgumentMetadata) {
    this.loggerService.log(ValidateEvenPipe.name, 'Start');
    if (value % 2 === 0) {
      return value;
    }

    throw new OddNumberError(value);
  }
}
