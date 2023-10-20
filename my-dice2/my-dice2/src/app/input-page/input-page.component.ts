import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  constructor(private router: Router, private gameDataService: GameDataService) {}

  onSelect(choice: string) {
    this.gameDataService.setUserChoice(choice);
  }

  onSubmit() {
    const computerChoice = this.getComputerChoice();
    const winner = this.getWinner(this.gameDataService.userChoice$, computerChoice);
    this.router.navigate(['/result'], { state: { winner } });
  }

  private getComputerChoice(): string {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }


  private getWinner(userChoice$: Observable<string>, computerChoice: string): string {
    let winner = '';

    userChoice$.subscribe(userChoice => {
      if (userChoice === computerChoice) {
        winner = 'tie';
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        winner = 'user';
      } else {
        winner = 'computer';
      }
    });

    return winner;
  }

}
