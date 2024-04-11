import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbconnectionService } from './dbconnection/dbconnection.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DbconnectionService],
})
export class AppModule {}
