import { Controller, Get, Post, Body, Param, Query, Delete, ParseIntPipe, HttpStatus, DefaultValuePipe } from '@nestjs/common';
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
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }

  @Post('/email-verify')
  async verfyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken)
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { email, password } = dto;
    return await this.usersService.login(email, password);
  }

  @Get()
  async findAll(
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number,
    @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
  ) {
    console.log(offset, limit);
    return this.usersService.findAll();
  }

  @Get('/:id')
  async getUserInfo(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) userId: number): Promise<UserInfo> {
    return await this.usersService.getUserInfo(userId)
  }

  @Delete('/:id')
  async deleteUser(@Param('id') userId: string): Promise<UserInfo> {
    return await this.usersService.deleteUser(userId)
  }
}
