import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  public total: number = 0;
  public diceImages: string[] = [
    'assets/images/dice1.gif',
    'assets/images/dice2.gif',
    'assets/images/dice3.gif',
    'assets/images/dice4.gif',
    'assets/images/dice5.gif',
    'assets/images/dice6.gif'
  ];


  constructor() {
    this.rollDice();
  }

  rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;

    this.total = dice1 + dice2 + dice3;

    this.diceImages[0] = `assets/images/dice${dice1}.gif`;
    this.diceImages[1] = `assets/images/dice${dice2}.gif`;
    this.diceImages[2] = `assets/images/dice${dice3}.gif`;
  }
}
