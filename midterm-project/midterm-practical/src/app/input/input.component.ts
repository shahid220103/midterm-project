import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  constructor(private dataService: DataService) {}

  onSubmit(name: string, meal: string) {
    this.dataService.name = name;
    this.dataService.meal = meal;
  }
}
