import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AllFilter } from './filter/all.filter.ts/all.filter';
import { OddFilter } from './filter/odd.filter.ts/odd.filter';
import { ControllerGuard } from './guards/controller.guard.ts/controller.guard';
import { ModuleGuard } from './guards/module.guard.ts/module.guard';
import { AllCapsInterceptor } from './interceptors/all-caps.interceptor.ts/all-caps.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor.ts/logging.interceptor';
import { ModuleMiddleware } from './middleware/module.middleware.ts/module.middleware';
import { RouteMiddleware } from './middleware/route.middleware.ts/route.middleware';
import { ClassPipe } from './pipe/class.pipe.ts/class.pipe';
import { ControllerPipe } from './pipe/controller.pipe.ts/controller.pipe';
import { GlobalPipe } from './pipe/global.pipe.ts/global.pipe';
import { HandlerPipe } from './pipe/handler.pipe.ts/handler.pipe';
import { ValidateEvenPipe } from './pipe/validate-even.pipe.ts/validate-even.pipe';
import { LoggerService } from './services/logger.service';
import { TimeService } from './services/time.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    TimeService,
    ModuleMiddleware,
    LoggerService,
    ControllerGuard,
    AllCapsInterceptor,
    ValidateEvenPipe,
    GlobalPipe,
    HandlerPipe,
    ControllerPipe,
    AllFilter,
    OddFilter,
    ClassPipe,
    OddFilter,
    AllFilter,
    { provide: APP_GUARD, useClass: ModuleGuard },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ModuleMiddleware)
      .forRoutes('*')
      .apply(RouteMiddleware)
      .forRoutes('bye');
  }
}
