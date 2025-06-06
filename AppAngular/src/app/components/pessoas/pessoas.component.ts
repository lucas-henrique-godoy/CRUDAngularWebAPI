import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  formulario: any; //Variável que representa nosso formulário.
  tituloFormluario: string; //Variável que representa o titulo do formulario.

  constructor() { }

  ngOnInit(): void { //Onde nossos componentes são inicializados.
    this.tituloFormluario = "Nova Pessoa";
    this.formulario = new FormGroup({ //FormGroup agrupa os FormControls que são os inputs.      
      nome: new FormControl(null),
      sobrenome: new FormControl(null),  //Essa área serve para dar nomes para os nossos inputs(FormControls) iguais os do model.
      idade: new FormControl(null),
      profissao: new FormControl(null)
    })
  }

  EnviarFormulario(): void {
    const pessoa: Pessoa = this.formulario.value;
  }
}
