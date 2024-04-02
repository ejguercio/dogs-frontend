import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate-button',
  templateUrl: './navigate-button.component.html',
  styleUrls: ['./navigate-button.component.css'],
})
export class NavigateButtonComponent {
  @Input() text: string = '';
  @Input() path: string = '';

  constructor(private router: Router) {}

  navigate() {
    if (this.path) {
      this.router.navigate([this.path]);
    }
  }
}
