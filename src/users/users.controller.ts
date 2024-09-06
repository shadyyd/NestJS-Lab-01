import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  getUsersByUserId(@Param('id') id: string) {
    return this.usersService.getUsersById(parseInt(id));
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUserById(parseInt(id));
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: User) {
    return this.usersService.updateUserById(parseInt(id), user);
  }

  @Get(':id/coffees')
  getUserFavCoffee(@Param('id') id: string) {
    return this.usersService.populateCoffeesList(parseInt(id));
  }
}

/*
to validate requests 
install class-validator, class-transformer , 
create folder dtos inside entity folder 
create-user.dto.ts -> export class -> update-user.dto.ts in PartialTypes()
add decorator validation 
updateuser.dto.ts -> install mapped-types ->

in main.ts -> app.useGlobalPipes(new ValidatePipe())
*/
