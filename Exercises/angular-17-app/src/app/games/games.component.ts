import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  template: `
  <p>The favourite games of {{ username }} are:</p>
   <ul>
      @for (game of games; track game.id){
        <li (click)="fav(game.name)">{{ game.name }}</li>
      }
   </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username: string = '';
  @Output() addFavouriteEvent = new EventEmitter<string>();
  fav(gameName : string){
    this.addFavouriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Uncharted'
    },
    {
      id: 2,
      name: 'Mario'
    },
    {
      id: 3,
      name: 'Zelda'
    }
  ];
}
