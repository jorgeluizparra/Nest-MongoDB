import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ExpensesModule } from './expenses/expenses.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ExpensesModule, MongooseModule.forRoot('mongodb://localhost/expense-tracker-nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
