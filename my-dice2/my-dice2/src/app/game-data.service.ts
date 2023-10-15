import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private userChoiceSource = new BehaviorSubject<string>('');
  userChoice$ = this.userChoiceSource.asObservable();

  setUserChoice(choice: string) {
    this.userChoiceSource.next(choice);
  }
}
