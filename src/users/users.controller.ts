import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpCode } from '@nestjs/common';
import { Header } from '@nestjs/common';
import { Redirect } from '@nestjs/common';
import { GetUsersDto } from './dto/get-users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() getUsers: GetUsersDto) {
    return this.usersService.findAll(getUsers);
  }

  @Header('Performed-By', 'tinygram')
  @Redirect('https://tinygram.dev', 301)
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (+id < 1) {
      throw new BadRequestException('id > 0')
    }
    return this.usersService.findOne(+id);
  }

  @HttpCode(202)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('redirect/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/'}
    }
  }

  @Delete(':userId/memo/:memoId')
  deleteUserMemo(@Param() params: { [key: string]: string }) {
    return {
      userId: params.userId, 
      memoId: params.memoId 
    }
  }

  @Delete(':userId/memo2/:memoId')
  deleteUserMemo2(
    @Param('userId') userId: string,
    @Param('memoId') memoId: string,
  ) {
    return {
      userId: userId, 
      memoId: memoId 
    }
  }
}
