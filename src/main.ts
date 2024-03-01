import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });

  // 注册全局中间件
  // app.use(loggerMiddleware);

  // 全局注册错误过滤器
  // app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(8888);
}

bootstrap();
