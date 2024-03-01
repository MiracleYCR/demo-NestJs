import { HttpException, HttpStatus } from '@nestjs/common';

// 自定义 exception
export class ForbiddenException extends HttpException {
  constructor() {
    super('拒绝请求！', HttpStatus.FORBIDDEN);
  }
}
