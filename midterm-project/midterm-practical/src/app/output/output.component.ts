import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  constructor(private dataService: DataService) {}

  get name() {
    return this.dataService.name;
  }

  get meal() {
    return this.dataService.meal;
  }
}
