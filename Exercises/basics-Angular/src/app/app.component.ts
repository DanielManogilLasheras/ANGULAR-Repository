import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basics-Angular';
  activity = 'angular';

  seleccion="";

 constructor(private router: Router){

  }
  navegar(){
    console.log("Procedo a navegar")
    this.router.navigate(["listado", 3])
  }
}
