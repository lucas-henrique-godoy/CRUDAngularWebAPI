import { Pessoa } from './../Model/pessoa.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private localStorageKey = 'pessoas';
 private pessoas: Pessoa[]= [];

  constructor() {
    const dadosSalvos = localStorage.getItem(this.localStorageKey);
    if(dadosSalvos){
      this.pessoas = JSON.parse(dadosSalvos);
    }
   }
}
