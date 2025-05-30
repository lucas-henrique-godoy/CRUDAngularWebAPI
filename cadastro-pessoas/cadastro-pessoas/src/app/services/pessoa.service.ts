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

   getAll(): Pessoa[] {
    return this.pessoas;
   }

   add(pessoa: Pessoa): void {
    pessoa.id = this.generateId();
    this.pessoas.push(pessoa);
    this.save();
   }

   update(pessoa: Pessoa): void {
    const index = this.pessoas.findIndex(p => p.id === pessoa.id);
    if(index !== -1){
      this.pessoas[index] = pessoa;
      this.save();
    }
   }

   delete(id: number): void {
    this.pessoas = this.pessoas.filter(p => p.id !== id);
    this.save();
   }

   private save(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.pessoas));
   }

   private generateId(): number {
    return this.pessoas.length > 0 ? Math.max(...this.pessoas.map(p => p.id)) + 1 : 1;
   }

   getById(id: number): Pessoa | undefined {
    return this.pessoas.find(p => p.id === id);
   }
}
