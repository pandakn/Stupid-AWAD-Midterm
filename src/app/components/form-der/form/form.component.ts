import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/services/users/users.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private userService: UsersService) {}

  options: string[] = ['', 'Mr', 'Mrs', 'Miss', 'Ms'];
  sex: string[] = ['Male', 'Female'];

  profileForm = new FormGroup({
    title: new FormControl(''),
    studentId: new FormControl('', [
      Validators.required,
      Validators.pattern('[Bb][0-9]{7}'),
    ]),
    name: new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      street: new FormControl(''),
      zip: new FormControl(''),
    }),
    aliases: new FormArray([new FormControl('')]),
  });

  aliasesFormArray = this.profileForm.get('aliases') as FormArray;

  // if use Validators must have method get for get value of form
  get email() {
    return this.profileForm.get('email');
  }
  get studentId() {
    return this.profileForm.get('studentId');
  }

  get aliases() {
    return this.aliasesFormArray;
  }

  removeAlias(idx: number) {
    const control = this.aliasesFormArray;

    control.removeAt(idx);
  }

  ngOnInit(): void {}

  addAlias() {
    this.aliases.push(new FormControl(''));
  }

  getLengthAliases(): number {
    const aliasesLength = this.aliasesFormArray;
    return aliasesLength.length;
  }

  submitForm(formGroup: FormGroup) {
    const data = formGroup.value;
    this.userService.addUser(data);
    this.profileForm.reset();
  }
}
