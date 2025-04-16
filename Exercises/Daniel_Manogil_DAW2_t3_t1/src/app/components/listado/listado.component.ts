import { Component } from '@angular/core';
import { RecetaAPI } from '../../model/receta';
import { DataService } from '../../services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { FavouritesService } from '../../services/favourites.service';
@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  recetas ?: RecetaAPI [];
  constructor(private dataService : DataService, private favoriteService : FavouritesService) {
    dataService.getAllRecipes().subscribe((data) => {
      this.recetas = data.recipes;
    });
  };
  addFavorite(receta : RecetaAPI){
    if(this.favoriteService .addFavorito(receta)){
      Swal.fire({
        title: "Ha añadido esta receta con éxito!",
        icon: "success",
        draggable: true
      });
    }
  }
  searchFavorite(receta: RecetaAPI): boolean{
    return this.favoriteService.searchFavorite(receta);
  }
}


