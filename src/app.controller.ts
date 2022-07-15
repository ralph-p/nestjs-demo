import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { OddFilter } from './filter/odd.filter.ts/odd.filter';
import { ControllerGuard } from './guards/controller.guard.ts/controller.guard';
import { RouteAuthGuard } from './guards/route-auth.guard.ts/route-auth.guard';
import { AllCapsInterceptor } from './interceptors/all-caps.interceptor.ts/all-caps.interceptor';
import { ControllerPipe } from './pipe/controller.pipe.ts/controller.pipe';
import { HandlerPipe } from './pipe/handler.pipe.ts/handler.pipe';
import { ValidateEvenPipe } from './pipe/validate-even.pipe.ts/validate-even.pipe';
import { ValidateFizzBuzz } from './pipe/validate-fizz-buzz.pipe';

@Controller()
@UseGuards(ControllerGuard)
@UsePipes(ControllerPipe) // Redundant, but for examples
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AllCapsInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bye')
  getBye(): string {
    return this.appService.getBye();
  }

  @Get('secret')
  @UseGuards(RouteAuthGuard)
  getSecret(): string {
    return this.appService.getSecret();
  }

  @Get('evens')
  @UsePipes(HandlerPipe)
  @UseFilters(OddFilter)
  getEvens(@Query('v', ParseIntPipe, ValidateEvenPipe) value: number) {
    return `Wow, ${value} is a very even number`;
  }

  @Get('fizzBuzz')
  @UsePipes(HandlerPipe)
  getFizzBuzz(
    @Query('v', ParseIntPipe, ValidateFizzBuzz) value: number | string,
  ) {
    return value;
  }

  @Get('error')
  getError() {
    throw new Error('This is an error');
  }
}
