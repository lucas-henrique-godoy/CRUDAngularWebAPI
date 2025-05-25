import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './Pessoa';

const httpOptions = {    // Aqui é configurado o cabeçalho da requisição Http que será enviado, mas somente para aquelas que alteram os dados como: POST,PUT e DELETE. 
  headers: new HttpHeaders({
    'Content-type' : 'application/json' //Tipo de dados que iremos enviar e receber(JSON).
  })
};

@Injectable({
  providedIn: 'root' // Torna esse serviço disponível em toda a aplicação
})
export class PessoasService {
  url = 'https://localhost:5001/api/pessoas';  //Essa é a url da nossa api.

  constructor(private http: HttpClient) {}    //Colocar no construtor o  HttpClient para fazer as requisiçoes.

  PegarTodos(): Observable<Pessoa[]>{             //PegarTodos: retorna um Array(lista) de Pessoas
    return this.http.get<Pessoa[]>(this.url);     // Retornar o que será usado para fazer requisições http(this.http) --> Pegar dados com o get com um array de pesoas(get<Pessoa[]>) --> Depois enviar a url da api
  }

  PegarPeloId(pessoaId: number): Observable<Pessoa>{    //PegarPeloId: Retorna uma pessoa pelo id, como sera apenas 1 pessoa, não precisa de um array ou lista.
    const apiUrl = `${this.url}/${pessoaId}`;           //Configurar a url pois será enviado  um id // const apiUrl = `${this.url}/${pessoaId}`; --> Esta modificando a nossa url original para acrescentar um id, ou seja a nossa url  que foi feita la em cima, + o id da pessoa.
    return this.http.get<Pessoa>(apiUrl);               //Retorna o que sera usado para fazer requisiçoes http(this.http) --> Pegar uma pessoa(get<Pessoa>(apiUrl)) --> Passar a url modiicada que foi colcoada na variavel apiUrl.
  }

  SalvarPessa(pessoa: Pessoa): Observable<any>{ // SalvarPessoa: insere uma nova pessoa. --> Observable<any> Usamos "any" porque ainda não sabemos o tipo da resposta da API
    return this.http.post<Pessoa>(this.url, pessoa, httpOptions); // Retornar o que será usado para fazer requisições http(this.http) -->  Envia dados do tipo pessoa  para serem inseridos usando POST(return this.http.post<Pessoa>) --> Depois envia para o servidor a url(this.url) --> os dados que estão na variavel pessoa --> Envia tambem as opções do cabeçalho da nossa requisição http que esta na variavel(httpOptions). Codigo todo: this.url, pessoa, httOptions
  }

  AtualizarPessoa(pessoa: Pessoa): Observable<any>{     // AtualizarPessoa: atualiza os dados da pessoa --> Observable<any> Usamos any pois não iremos receber um tipo conhecido
    return this.http.put<Pessoa>(this.url, pessoa, httpOptions);  //Retorna o que sera usado para fazer requisiçoes http(this.http) --> Evia dados do tipo Pessoa para serem atualizados usando PUT(return this.http.put<Pessoa>) -- < Depois envia para o seridor a url(this.url) --> os dados que estão na variavel pessoa --> Envia tambem as opções do cabeçalho da nossa requisição http que esta na variavel(httpOptions).  Codigo todo: this.url, pessoa, httOptions
  }
    
  ExcluirPessoa(pessoaId: number): Observable<any>{   //ExcluirPessoa: Exclui uma pessoa. -->  Eu não vou receber algum formato conhecido do servidor? Não então usa o any(Observable<any>)
    const apiUrl = `${this.url}/${pessoaId}`;         //Configura a url origina da api para incluir o id da pessoa que será excluída
    return this.http.delete<number>(apiUrl);          //Retorna o que sera usado para fazer requisiçoes http(this.http). --> Envia ara o servidor o formato do id que sera usadopara ser apagado(delete<number>) --> Envia a url modificada, mas nao  precisa mandar o pessoaId pois ele ja esta indo junto na url da api. --> Envia tambem as opções do cabeçalho da nossa requisição http que esta na variavel(httpOptions).
  }
}
