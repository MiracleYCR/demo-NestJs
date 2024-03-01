import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { UserService } from '../service/user.service';

import { UserDto } from '../dto/user.dto';
import { CreateUserDto } from '../dto/user-create.dto';

@Controller({ path: 'users' })
export class UserController {
  // 构造函数注入
  // constructor(private userService: UserService) {}

  // 属性注入
  @Inject()
  private readonly userService: UserService;

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get(':id')
  async findAll(@Param('id') id: string): Promise<UserDto[]> {
    return this.userService.findUser(Number(id));
  }
}
