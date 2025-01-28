import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'danieldev';
  isLoggedIn = false;
  favgame = '';
  getFavouriteGame(gameName : string){
    this.favgame = gameName;
  }
  greet(){
    alert('Hello!');
  }
}

