import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // receive props from parent
  @Input() imgUrl!: string;
  @Input() id!: string;
  @Input() bio!: string;
  // () => <return type>
  // in bracket is params
  @Input() name!: string;
  @Input() age!: number;
  constructor() {}
}
