import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  name: string = '';
  mealPreference: string = '';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.name = '';
    this.mealPreference = '';
  }

  onSubmit() {
    this.dataService.setName(this.name);
    this.dataService.setMealPreference(this.mealPreference);
    this.router.navigate(['/output']);
  }
}
