import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bio-input',
  templateUrl: './bio-input.component.html',
  styleUrls: ['./bio-input.component.css'],
})
export class BioInputComponent implements OnInit {
  bio = new FormControl('');

  @Output() bioEvent = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}

  sendValueToParent() {
    if (this.bio.value) {
      // Emit the value of the FormControl as a string
      this.bioEvent.emit(this.bio.value);

      // Clear the input field by resetting the FormControl
      this.bio.reset('');
    }
  }
}
