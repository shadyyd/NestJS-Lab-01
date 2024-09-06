/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffeeList: Coffee[] = [];
  private idCounter: number = 0;

  getAllCoffees() {
    return this.coffeeList;
  }

  getCoffeeById(id: number) {
    return this.coffeeList.find((coffee) => coffee.id === id);
  }

  addCoffee(coffee: Coffee) {
    const newCoffee = { ...coffee, id: this.idCounter };
    this.idCounter++;
    this.coffeeList.push(newCoffee);
    return newCoffee;
  }

  deleteCoffee(id: number) {
    this.coffeeList = this.coffeeList.filter((coffee) => coffee.id !== id);
  }

  updateCoffee(id: number, updatedCoffee: Coffee) {
    const updatedDoc = { ...updatedCoffee, id };
    this.coffeeList = this.coffeeList.map((coffee) =>
      coffee.id === id ? updatedDoc : coffee,
    );
    return updatedDoc;
  }
}

export type Coffee = {
  id: number;
  name: string;
  price: number;
};
