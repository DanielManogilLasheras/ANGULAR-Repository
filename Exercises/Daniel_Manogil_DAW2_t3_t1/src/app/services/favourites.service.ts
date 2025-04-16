import { Injectable } from '@angular/core';
import { RecetaAPI } from '../model/receta';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favoritos : RecetaAPI [] = [];
  constructor() { }

  public addFavorito(receta : RecetaAPI): boolean{
    const found = this.favoritos.some(element => element.id === receta.id);
    if(found){
      return false;
    }else{
      this.favoritos.push(receta);
      return true;
    }
  }
  public getFavoritos() : RecetaAPI[]{
    return this.favoritos;
  }
  public deleteFavorito(receta : RecetaAPI): boolean {
    const initial = this.favoritos;
    this.favoritos = this.favoritos.filter(fav => fav.id !== receta.id);
    return this.favoritos.length < initial.length;
  }
  public searchFavorite(receta: RecetaAPI): boolean {
    return this.favoritos.some(fav => fav.id === receta.id);
  }
}

