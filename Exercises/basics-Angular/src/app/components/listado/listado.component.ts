import { Component } from '@angular/core';
import { Conocimiento } from '../../model/modelos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  name="Daniel";
  url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png";
  nombreConocimiento="";
  nivelConocimiento="";
  conocimientos: Conocimiento[] = [];
  mostrar = false;
  guardarElemento(){
    if (this.nombreConocimiento == "" && this.nivelConocimiento == ""){
        Swal.fire({
          title: 'Fallo',
          text: 'No has ingresado valores'
        })
    }else{
      let conocimiento: Conocimiento = {nombre: this.nombreConocimiento, nivel: this.nivelConocimiento};
      this.conocimientos.push(conocimiento)
      this.vaciarElementos();
      console.log(this.conocimientos)
    }

  }
  vaciarElementos(){
    this.nombreConocimiento = "";
    this.nivelConocimiento = "";
  }
  mostrarConocimiento(){
     this.mostrar = !this.mostrar;
  }
}
