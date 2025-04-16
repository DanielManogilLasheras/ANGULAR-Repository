import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  receta: RecetaAPI = {} as RecetaAPI;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const recetaId = this.route.snapshot.paramMap.get('id');

    if (recetaId) {
      this.recipeService.getRecipeById(+recetaId).subscribe((data: RecetaAPI) => {
        this.receta = data;
      });
    }
  }
}
