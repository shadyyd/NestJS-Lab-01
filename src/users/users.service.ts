import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class UsersService {
  private usersList: User[] = [];
  private idCounter: number = 0;

  constructor(private readonly coffeesService: CoffeesService) {}

  getAllUsers(): User[] {
    return this.usersList;
  }

  getUsersById(id: number): User {
    return this.usersList.find((user) => user.id === id);
  }

  deleteUserById(id: number): void {
    this.usersList = this.usersList.filter((user) => user.id !== id);
  }

  createUser(user: User): User {
    const newUser = { ...user, id: this.idCounter };
    this.idCounter++;
    this.usersList.push(newUser);
    return newUser;
  }

  updateUserById(id: number, updatedUser: User) {
    const updatedDoc = { ...updatedUser, id };
    this.usersList = this.usersList.map((user) =>
      user.id === id ? updatedDoc : user,
    );
    return updatedDoc;
  }

  populateCoffeesList(userId: number) {
    const user = this.getUsersById(userId);
    // console.log(user, user.coffees);
    // return user.coffees;
    const coffeeIds = [...user.coffees];
    const favCoffeeList = coffeeIds.map((coffeeId) => {
      return this.coffeesService.getCoffeeById(coffeeId);
    });

    return favCoffeeList;
  }
}

export type User = {
  name: string;
  age: number;
  id: number;
  coffees: number[];
};
