import { Component } from '@angular/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  options = ['rock', 'paper', 'scissors'];
  userChoice = '';
  computerChoice = '';
  winner = '';

  constructor(private gameDataService: GameDataService) {}

  onSelect(choice: string) {
    this.userChoice = choice;
    this.gameDataService.setUserChoice(choice);
    this.computerChoice = this.getComputerChoice();
    this.winner = this.getWinner(this.userChoice, this.computerChoice);
  }

  private getComputerChoice(): string {
    const index = Math.floor(Math.random() * this.options.length);
    return this.options[index];
  }

  private getWinner(userChoice: string, computerChoice: string): string {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'The computer wins!';
    }
  }
}
