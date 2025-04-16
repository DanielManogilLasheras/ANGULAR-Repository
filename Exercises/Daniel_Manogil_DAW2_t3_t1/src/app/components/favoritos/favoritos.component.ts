import { Component } from '@angular/core';
import { RecetaAPI } from '../../model/receta';
import { FavouritesService } from '../../services/favourites.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-favoritos',
  standalone: false,
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  recetas ?: RecetaAPI [];
  constructor ( private favoritosService : FavouritesService ) {
    this.recetas = this.favoritosService.getFavoritos()
  }
  deleteFavorito(receta : RecetaAPI){
      if(this.favoritosService.deleteFavorito(receta)){
        Swal.fire({
          title: "Ha eliminado esta receta de tus favoritos!",
          icon: "success",
          draggable: true
        });
        this.recetas = this.favoritosService.getFavoritos()
      }
  }
}
