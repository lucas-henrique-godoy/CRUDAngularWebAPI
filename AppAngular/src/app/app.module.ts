import { PessoasService } from './pessoas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //Para usar ngIf e ngFor.
import {HttpClientModule} from '@angular/common/http'; // Para requisições http.
import { ReactiveFormsModule } from '@angular/forms'; //Uma das maneiras para usar formulários no angular.
import {ModalModule} from  'ngx-bootstrap/modal'; //Para mostrar avisos quando for excluir algum dado.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    // já inclui CommonModule internamente.
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()//Usando forRoot para registrar o modal  para a aplicaçao inteira.
  ],
  providers: [
    // PessoasService aqui só se não usar @Injectable({ providedIn: 'root' }) no serviço.
    PessoasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
