import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftSideComponent } from './left-side/left-side.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LeftSideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carApp';
}
