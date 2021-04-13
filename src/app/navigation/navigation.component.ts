import {Component} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {GameService} from '../services/game.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private gameService: GameService) {
  }

  reset() {
    this.gameService.resetGame();
  }
}
