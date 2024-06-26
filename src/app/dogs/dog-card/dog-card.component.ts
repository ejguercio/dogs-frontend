import { Component, Input } from '@angular/core';
import { Dog } from '../../models/dog.interface';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css'],
})
export class DogCardComponent {
  @Input() dog!: Dog;
}
