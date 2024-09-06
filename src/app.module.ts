import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, CoffeesController],
  providers: [AppService, UsersService, CoffeesService],
})
export class AppModule {}

/*
make AppModule implements NestedModule to use middlewares
configure(consumer:MiddlewareConsumer){
consumer.apply(middlewareFn)}
*/
