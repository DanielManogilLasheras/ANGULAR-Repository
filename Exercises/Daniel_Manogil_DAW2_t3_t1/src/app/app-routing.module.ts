import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ErrorComponent } from './components/error/error.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const routes: Routes = [
  { path: "", redirectTo: "listado", pathMatch: "full" },
  { path: "listado", component: ListadoComponent},
  { path: "detalles/:id", component: DetallesComponent},
  { path: "favoritos", component: FavoritosComponent},
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
