import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private name: string = '';
  private mealPreference: string = '';

  constructor() { }

  setName(name: string) {
    this.name = name;
  }

  setMealPreference(mealPreference: string) {
    this.mealPreference = mealPreference;
  }

  getName() {
    return this.name;
  }

  getMealPreference() {
    return this.mealPreference;
  }
}
