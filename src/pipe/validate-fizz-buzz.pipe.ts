import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class ValidateFizzBuzz implements PipeTransform {
  constructor(private loggerService: LoggerService) {}

  transform(value: any, metadata: ArgumentMetadata) {
    this.loggerService.log(ValidateFizzBuzz.name, 'Start');
    let fbValue = '';
    if (value % 3 === 0) {
      fbValue += 'Fizz';
    }
    if (value % 5 === 0) {
      fbValue += 'Buzz';
    }
    if (fbValue === '') {
      fbValue = value;
    }
    return fbValue;
  }
}
