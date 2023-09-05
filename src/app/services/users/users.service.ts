import { Injectable } from '@angular/core';
import { IUser } from './users.model';
import mockUsers from 'src/__mock__/mockUsers';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = mockUsers;

  constructor() {}

  getAllUsers() {
    return this.users;
  }
}
