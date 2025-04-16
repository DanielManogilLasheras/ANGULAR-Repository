import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: "", redirectTo: "formulario", pathMatch: "full",},
  { path: "listado", component:ListadoComponent},
  { path: "formulario", component:FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
