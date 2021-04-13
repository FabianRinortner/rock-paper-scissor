import {Component} from '@angular/core';
import {GameService} from '../services/game.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  loading = false;

  constructor(public gameService: GameService, private snackBar: MatSnackBar) {
  }

  selectValue(value) {

    this.loading = true;
    this.gameService.select(value);
    const result = this.gameService.result;

    if (result === 'won') {
      this.snackBar.open('You won the game!', '', {duration: 7000});
    } else if (result === 'lost') {
      this.snackBar.open('You lost the game!', '', {duration: 7000});
    } else if (result === 'tie') {
      this.snackBar.open('It\'s getting serious! (Tie)', '', {duration: 7000});
    }
    this.loading = false;
  }
}
