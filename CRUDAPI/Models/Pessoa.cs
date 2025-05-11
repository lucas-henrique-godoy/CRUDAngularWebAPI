using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Routing.Patterns;

namespace CRUDAPI.Models
{
    public class Pessoa
    {
        public int PessoaId { get; set; } //Chave primária

        public string Nome { get; set; }

        public string Sobrenome { get; set; }

        public int Idade { get; set; }

        public string Profissao { get; set; }
    }
}