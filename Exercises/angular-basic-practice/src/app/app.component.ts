import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular basics';
  description = 'This is a basic training application';
  seleccion = "1";
  constructor(private router : Router) {

  }
  navegar(){
    console.log("procedo a navegar")
    this.router.navigate(['listado',this.seleccion])
  }
}
