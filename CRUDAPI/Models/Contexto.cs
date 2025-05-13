// Aqui estamos dizendo que vamos usar algumas ferramentas já prontas do .NET
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// Essa aqui é uma ferramenta especial chamada Entity Framework,
// que ajuda a gente a conversar com o banco de dados como se fosse com objetos.
using Microsoft.EntityFrameworkCore;

// Aqui começa um novo "pacotinho" de código chamado CRUDAPI.Models
// É só um jeito de organizar os arquivos do projeto
namespace CRUDAPI.Models
{
    // Estamos criando uma "classe" chamada Contexto.
    // Uma classe é como um molde que diz como algo funciona.
    // Essa classe está dizendo como vamos conversar com o banco de dados.
    public class Contexto : DbContext    
    {
        // Aqui dizemos que temos uma "tabela" chamada Pessoas no banco de dados.
        // E cada linha dessa tabela é uma pessoa.
        public DbSet<Pessoa> Pessoas { get; set; }

        // Esse é o construtor da nossa classe.
        // Ele recebe umas opções chamadas 'opcoes' para configurar a conexão com o banco.
        // A palavra "base" quer dizer que estamos passando isso para a classe "pai",
        // que é o DbContext (uma classe que já vem pronta e que Contexto está copiando).
        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes)
        {
            // Aqui dentro poderíamos colocar mais configurações, se quiséssemos.
        }
    }
}
