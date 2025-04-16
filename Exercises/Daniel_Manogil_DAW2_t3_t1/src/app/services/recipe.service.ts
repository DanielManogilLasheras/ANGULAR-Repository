import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecetaAPI } from '../model/receta';
 // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://dummyjson.com/recipes';  // URL de la API

  constructor(private http: HttpClient) {}

  getRecipeById(id: number): Observable<RecetaAPI> {
    let url = ""
    return this.http.get<RecetaAPI>(`${this.apiUrl}/${id}`);
  }
}
