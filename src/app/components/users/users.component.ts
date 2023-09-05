import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/services/users/users.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  tableHeader!: string[];

  ngOnInit(): void {
    // this.tableHeader = this.getKeyOfUser();
    this.tableHeader = this.getKeyOfUser();
    // console.log(this.tableHeader);
  }

  getAllUsers() {
    return this.userService.getAllUsers();
  }

  getKeyOfUser() {
    const users = this.getAllUsers();

    const key = Object.keys(users[0]);

    return key;
  }
}
