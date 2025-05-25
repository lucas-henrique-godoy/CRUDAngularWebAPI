import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './components/pessoas/pessoas.component';

const routes: Routes = [{
  path: 'pessoas', component: PessoasComponent  // Aqui é onde são registradas as rotas de cada componente que criamos. O path é a nossa url, ou seja nosso servidor subiu no http://localhost:4200/, se eu digito: http://localhost:4200/pessoas, vai cair no nosso componente de pessoas.  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
