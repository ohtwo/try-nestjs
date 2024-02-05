import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { UserInfo } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private emailService: EmailService) {}
  
  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private checkUserExists(email: string) {
    return false;
  }

  private saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
    return;
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(email, signupVerifyToken);
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO
    // 1. Check DB
    // 2. Issue JWT

    throw new Error('Method not implemented')
  }

  async login(email: string, password: string): Promise<string> {
    // TODO
    // 1. Check DB
    // 2. Issue JWT
    throw new Error('Method not implemented')
  }

  findAll() {
    // TODO
    // 1. Check DB
    // 2. return All Users

    return 'all users'
  }

  findOne(id: number) {
    return `${id} user`
  }

  async getUserInfo(userId: number): Promise<UserInfo> {
    // TODO
    // 1. Check DB
    // 2. return UserInfo

    throw new Error('Method not implemented')
  }

  async deleteUser(userId: string): Promise<UserInfo> {
    // TODO
    // 1. Check DB
    // 2. delete User

    throw new Error('Method not implemented')
  }
}
