import { Component,EventEmitter,Input, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../Model/pessoa.model';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  @Input() pessoa: Pessoa | null = null;
  @Output() salvar = new EventEmitter<Pessoa>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.pessoa?.id],
      nome: [this.pessoa?.nome || '',Validators.required],
      emsil: [this.pessoa?.email || '', [Validators.required, Validators.email]],
      idade: [this.pessoa?.idade ?? '', [Validators.min(0)]] 
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.salvar.emit(this.form.value)
      this.form.reset();
    }
  }
}
