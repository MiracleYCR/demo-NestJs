import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { CreateUserDto } from '../dto/user-create.dto';

import { BadRequestException } from '@nestjs/common';
import { ForbiddenException } from '../exception/forbidden.exception';

@Injectable()
export class UserService {
  private userId: number = 0;
  private readonly users: UserDto[] = [];

  create(user: CreateUserDto) {
    const curTime = new Date();
    const curDate = `${curTime.getFullYear()}-${curTime.getMonth() + 1}-${curTime.getDay()} ${curTime.getHours()}:${curTime.getMinutes()}:${curTime.getSeconds()}`;

    this.userId++;

    this.users.push({
      ...user,
      id: this.userId,
      updateTime: curDate,
      createTime: curDate,
    });
  }

  findUser(id: number): UserDto[] {
    throw new Error();

    // throw new BadRequestException();
    return this.users.filter((item) => item.id === id);
  }
}
