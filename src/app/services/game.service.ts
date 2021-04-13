import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  computerScore = 0;
  computerValue = -1;
  playerScore = 0;
  playerValue = -1;
  result;

  constructor() {
  }

  select(value: number) {
    this.playerValue = value;
    this.computerValue = Math.floor(Math.random() * 3);
    this.heavyCalculations();
  }


  heavyCalculations(): void {
    if (this.playerValue === this.computerValue) {
      this.result = 'tie';
    }
    else if ((this.playerValue - this.computerValue + 3) % 3 === 1) {
      this.result = 'won';
      this.playerScore++;
    } else {
      this.result = 'lost';
      this.computerScore++;
    }
  }

  resetGame(): void {
    this.computerScore = 0;
    this.playerScore = 0;
    this.computerValue = -1;
  }
}
