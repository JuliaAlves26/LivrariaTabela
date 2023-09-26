import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NovosLivrosComponent } from './novos-livros/novos-livros.component';
import { NovosEscritoresComponent } from './novos-escritores/novos-escritores.component';


const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  {path: "principal", component: TableComponent},
  {path: "novos-livros", component: NovosLivrosComponent},
  {path: "novos-escritores", component:NovosEscritoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
