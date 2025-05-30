import { Component,EventEmitter,Input, OnInit,Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../Model/pessoa.model';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  @Input() pessoa: Pessoa | null = null;
  @Output() salvar = new EventEmitter<Pessoa>();
  form!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.pessoa?.id],
      nome: [this.pessoa?.nome || '',Validators.required],
      email: [this.pessoa?.email || '', [Validators.required, Validators.email]],
      idade: [this.pessoa?.idade ?? '', [Validators.min(0)]] 
    });
  }

  onSubmit(): void {
    if(this.form.valid) {
      this.salvar.emit(this.form.value)
      this.form.reset();
    }
  }
}
