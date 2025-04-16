import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre : string = "";
  apellido: string = "";
  edad : number = 0;
  fecha : Date = new Date();
  constructor(private servicio : DataService) {}
  addUser(){
    let usuario = {
      nombre : this.nombre,
      apellido : this.apellido,
      edad: this.edad,
      fecha : this.fecha,
    };
     //acceder al servicio de datos
    this.servicio.addUser(usuario);
    this.cleanData();

  }
  cleanData(){
    this.nombre = "";
    this.apellido = "";
    this.edad = 0;
    this.fecha = new Date();
  }
}
