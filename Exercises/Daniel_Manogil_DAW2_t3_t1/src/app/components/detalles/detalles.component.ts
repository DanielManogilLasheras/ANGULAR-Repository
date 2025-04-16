import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// Asegúrate de que la ruta sea correcta // Asegúrate de importar correctamente la interfaz
import { RecipeService } from '../../services/recipe.service';
import { RecetaAPI } from '../../model/receta';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  receta: RecetaAPI = {} as RecetaAPI; // Definimos la variable receta con la interfaz RecetaAPI

  constructor(
    private route: ActivatedRoute,  // Para obtener el id de la URL
    private recipeService: RecipeService  // Para obtener la receta desde la API
  ) {}

  ngOnInit(): void {
    // Obtenemos el id de la receta desde la URL
    const recetaId = this.route.snapshot.paramMap.get('id');  // Capturamos el parámetro 'id' de la URL

    // Comprobamos si existe un id y hacemos la llamada a la API
    if (recetaId) {
      this.recipeService.getRecipeById(+recetaId).subscribe((data: RecetaAPI) => {
        this.receta = data;  // Asignamos la receta obtenida a la variable receta
      });
    }
  }
}
