import { Coffee, CoffeesService } from './coffees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('api/coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getAllCoffees() {
    return this.coffeesService.getAllCoffees();
  }

  @Get(':id')
  getCoffeeById(@Param('id') id: string) {
    return this.coffeesService.getCoffeeById(parseInt(id));
  }

  @Post()
  addCoffee(@Body() coffee: Coffee) {
    return this.coffeesService.addCoffee(coffee);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: string) {
    return this.coffeesService.deleteCoffee(parseInt(id));
  }

  @Patch(':id')
  updateCoffee(@Param('id') id: string, @Body() coffee: Coffee) {
    return this.coffeesService.updateCoffee(parseInt(id), coffee);
  }
}
