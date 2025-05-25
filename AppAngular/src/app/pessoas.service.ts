import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {    // Aqui é configurado o cabeçalho da requisição Http que será enviado, mas somente para aquelas que alteram os dados como: POST,PUT e DELETE. 
  headers: new HttpHeaders({
    'Content-type' : 'aplication/json' //Tipo de dados que iremos enviar e receber(JSON).
  })
};

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  url: 'https://lohalhost:5001/api/pessoas';//Essa é a url da nossa api.
  constructor() { }
}
