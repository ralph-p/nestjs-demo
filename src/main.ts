import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllFilter } from './filter/all.filter.ts/all.filter';
import { GlobalGuard } from './guards/global.guard.ts/global.guard';
import { globalMiddleware } from './middleware/global.middleware';
import { GlobalPipe } from './pipe/global.pipe.ts/global.pipe';
import { LoggerService } from './services/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware);
  app.useGlobalGuards(new GlobalGuard());
  app.useGlobalPipes(new GlobalPipe(new LoggerService()));
  app.useGlobalFilters(new AllFilter(new LoggerService()));

  await app.listen(3000);
}
bootstrap();
