import { NextFunction, Request, Response } from 'express';
// import { Injectable, NestMiddleware } from '@nestjs/common';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('request.......');
//     next();
//   }
// }
export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  next();
}
