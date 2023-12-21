import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, ServiceA, ServiceB } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, ServiceA, ServiceB],
})
export class AppModule {}
