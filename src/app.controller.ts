import { Request } from 'express';
import { Controller, Get, Req } from '@nestjs/common';
import { AppService, ServiceB } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: ServiceB) {}

  @Get('hello')
  getHello(@Req() req: Request): string {
    return process.env.DATABASE_HOST;
    // return this.appService.getHello();
  }
}
