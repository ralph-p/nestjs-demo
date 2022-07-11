import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { LoggerService } from '../../services/logger.service';

@Injectable()
export class HandlerPipe implements PipeTransform {
  constructor(private loggerService: LoggerService) { }

  transform(value: any, metadata: ArgumentMetadata) {
    this.loggerService.log(HandlerPipe.name, 'Start');
    return value;
  }
}
