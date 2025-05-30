import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' }, // redireciona rota raiz
  { path: 'pessoas', component: PessoasComponent },
  { path: 'pessoas/novo', component: PessoaFormComponent }, // opcional se quiser formulário em rota separada
  { path: 'pessoas/editar/:id', component: PessoaFormComponent }, // opcional para editar
  { path: '**', redirectTo: 'pessoas' } // rota coringa
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
