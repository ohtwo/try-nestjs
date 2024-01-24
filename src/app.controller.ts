import { Request } from 'express';
import { Controller, Get, Req } from '@nestjs/common';
import { AppService, ServiceB } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller('app')
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get('hello')
  getHello(@Req() req: Request): string {
    return process.env.DATABASE_HOST;
    // return this.appService.getHello();
  }

  @Get('/db-host-from-config')
  getDatabaseHostFromConfigService(): string {
    return this.configService.get('DATABASE_HOST')
  }
}
