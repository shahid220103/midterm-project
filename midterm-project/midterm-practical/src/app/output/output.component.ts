import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  name: string = '';
  mealPreference: string= '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = this.dataService.getName();
    this.mealPreference = this.dataService.getMealPreference();
  }
}
