import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private computerChoices = ['rock', 'paper', 'scissors'];
  private score = 0;

  constructor() { }

  playGame(userChoice: string): string {
    const computerChoice = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];

    if (userChoice === computerChoice) {
      return 'tie';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      this.score++;
      return 'win';
    } else {
      this.score--;
      return 'lose';
    }
  }

  getScore(): number {
    return this.score;
  }

  resetScore(): void {
    this.score = 0;
  }
}
