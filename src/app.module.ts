import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, ServiceA, ServiceB } from './app.service';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, EmailModule, ConfigModule.forRoot({
    envFilePath: (process.env.NODE_ENV === 'production') ? '.prod.env'
    : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.dev.env'
  })],
  controllers: [AppController],
  providers: [AppService, ServiceA, ServiceB],
})
export class AppModule {}
