import { PessoaService } from './../services/pessoa.service';
import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../Model/pessoa.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];
  pessoaEditando: Pessoa | null = null;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.CarregarPessoas();
  }

  CarregarPessoas(): void {
    this.pessoas = this.pessoaService.getAll();
  }

  salvarPessoa(pessoa: Pessoa): void {
    if (pessoa.id) {
      this.pessoaService.update(pessoa);
    }else{
      this.pessoaService.add(pessoa);
    }
    this.pessoaEditando = null;
    this.CarregarPessoas();
  }

  editar(pessoa: Pessoa): void {
    this.pessoaEditando = {...pessoa };
  }

  excluir(id: number): void {
    this.pessoaService.delete(id);
    this.CarregarPessoas();
  }
}
