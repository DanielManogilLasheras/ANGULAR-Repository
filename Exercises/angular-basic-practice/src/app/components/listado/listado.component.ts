import { Component } from '@angular/core';
import { Conocimiento } from "../../model/modelos";
import Swal from "sweetalert2";
@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiY0tc6-vk8QECbwet6C3qc4XTBMeh2Gnlg&s';
  nombreConocimiento = "";
  nivelConocimiento = "";
  conocimientos : Conocimiento[] = [];
  mostrar = false;
  guardarElemento(){
    let conocimiento : Conocimiento = {nombre: this.nombreConocimiento, nivel: this.nivelConocimiento};
    this.conocimientos.push(conocimiento);
    console.log(this.conocimientos);
    this.vaciarDatos();
    Swal.fire("YES!");
  }

  vaciarDatos(){
    this.nombreConocimiento = '';
    this.nivelConocimiento= '';
  }
  mostrarConocimientos() {
      this.mostrar = !this.mostrar;
    }
}
