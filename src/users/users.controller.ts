import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserInfo } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post('/email-verify')
  async verfyEmail(@Query() dto: VerifyEmailDto): Promise<String> {
    console.log(dto);
    return;
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<String> {
    console.log(dto);
    return;
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: String): Promise<UserInfo> {
    console.log(userId)
    return;
  }
}
