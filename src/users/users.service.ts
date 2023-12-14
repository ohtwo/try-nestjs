import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users-dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const { email, name } = createUserDto
    return `This action adds a new user. name: ${name}, email: ${email}`;
  }

  findAll(getUsersDto: GetUsersDto) {
    const { limit, offset } = getUsersDto
    return `This action returns users offset: ${offset}, limit: ${limit}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
