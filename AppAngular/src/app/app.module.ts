import { PessoasService } from './pessoas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //Para usar ngIf e ngFor.
import {HttpClientModule} from '@angular/common/http'; // Para requisições http.
import { ReactiveFormsModule } from '@angular/forms'; //Uma das maneiras para usar formulários no angular.
import {ModalModule} from  'ngx-bootstrap/modal'; //Para mostrar avisos quando for excluir algum dado.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';

@NgModule({
  declarations: [AppComponent, PessoasComponent],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()//Usando forRoot para registrar o modal  para a aplicaçao inteira.
  ],
  providers: [HttpClientModule, PessoasService],  //Aqui em providers é registrado que será inicializado via injeção de dependência.              
  
  bootstrap: [AppComponent]
})
export class AppModule { }
