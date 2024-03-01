import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [],
  exports: [UserService],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {
  constructor(private userService: UserService) {
    console.log(this.userService);
  }
}
