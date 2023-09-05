import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  imgUrl!: string;
  name!: string;
  id!: string;
  age!: number;
  bio!: string;

  // Birth year
  private year = 2001;

  constructor() {}

  ngOnInit(): void {
    this.imgUrl =
      'https://i.pinimg.com/564x/37/9d/5e/379d5e41e1f2a89a810ee47a62ee0ff6.jpg';
    this.name = 'Pandakn';
    this.id = 'B3435069';
    this.bio = 'Why do we gotta take tests?😭';
    this.age = this.getAge();
  }

  getAge(): number {
    this.age = new Date().getFullYear() - this.year;

    return this.age;
  }

  receiveBioFromChild(value: string) {
    this.bio = value;
  }
}
