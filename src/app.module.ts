import cors from 'cors';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { APP_FILTER } from '@nestjs/core';
import { UserModule } from './user/user.module';

import { loggerMiddleware } from './user/middleware/logger.middleware';
import { HttpExceptionFilter } from './user/filter/httpException.filter';

@Module({
  imports: [UserModule],
  exports: [],
  providers: [
    // 替换内建的过滤器的类
    {
      provide: APP_FILTER, // 内建token
      useClass: HttpExceptionFilter, // 替换的类
    },
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware, cors).forRoutes('*');
  }
}
