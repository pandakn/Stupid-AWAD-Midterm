import { Injectable, OnInit } from '@angular/core';
import { IUser } from './users.model';
import mockUsers from 'src/__mock__/mockUsers';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements OnInit {
  users = mockUsers;

  constructor() {}

  ngOnInit(): void {}

  getAllUsers() {
    return this.users;
  }

  addUser(data: IUser) {
    this.users.push(data);
  }
}
