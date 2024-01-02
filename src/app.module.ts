import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, ServiceA, ServiceB } from './app.service';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [UsersModule, EmailModule],
  controllers: [AppController],
  providers: [AppService, ServiceA, ServiceB],
})
export class AppModule {}
