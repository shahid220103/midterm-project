import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  name: string = '';
  meal: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/output'], {
      queryParams: { name: this.name, meal: this.meal }
    });
  }
}
