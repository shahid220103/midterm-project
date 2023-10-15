import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  winner = '';

  constructor(private router: Router, private gameDataService: GameDataService) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras?.state;

    if (state) {
      this.winner = state['winner'];
    }
    this.gameDataService.userChoice$.subscribe();
  }
}
