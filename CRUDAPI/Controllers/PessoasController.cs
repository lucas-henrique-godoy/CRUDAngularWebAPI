using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CRUDAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")] //Rota api/pessoas
    public class PessoasController : ControllerBase
    {
         private readonly Contexto _contexto;// Representa a conexão com o banco de dados via Entity Framework

         public PessoasController(Contexto contexto)
         {  
            _contexto = contexto;       //Injeção de dependência do Contexto
         }

         [HttpGet] //Acessa a tabela Pessoas e retorna todos os registros como lista (ToListAsync).
         public async Task<ActionResult<IEnumerable<Pessoa>>> PegarTodosAsync()
         {
            return await _contexto.Pessoas.ToListAsync();
         }

         [HttpGet("{PessoaId}")] //Busca no banco uma pessoa com base no pessoaId.
         public async Task<ActionResult<Pessoa>> PegarPessoaPeloIdAsync(int pessoaId)
        {
            Pessoa pessoa = await _contexto.Pessoas.FindAsync(pessoaId);

            if (pessoa == null)
            {
                return NotFound();
            }
            else
            {
                return pessoa;
            }
        }

         [HttpPost] //Adiciona uma nova pessoa ao banco.
         public async Task<ActionResult<Pessoa>> SalvarPessoaAsync(Pessoa pessoa)
        {
            await _contexto.Pessoas.AddAsync(pessoa);  //AddAsync coloca no contexto de persistência
            await _contexto.SaveChangesAsync();   //SaveChangesAsync salva no banco.

            return Ok();
        }

         [HttpPut] //Atualiza os dados de uma pessoa, O EF Core compara o ID para saber qual registro atualizar.
         public async Task<ActionResult> AtualizarPessoaAsync(Pessoa pessoa)
        {
            _contexto.Pessoas.Update(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }


        [HttpDelete("{pessoaId}")] //Busca a pessoa pelo ID, Remove do banco com _contexto.Remove(), Salva as mudanças com SaveChangesAsync.
        public async Task<ActionResult> ExcluirPessoaAsync(int pessoaId)
        {
            Pessoa pessoa = await _contexto.Pessoas.FindAsync(pessoaId); //Pega o id da pessoa.
            if (pessoa == null)
            {
                return NotFound();
            }
            _contexto.Remove(pessoa); //Excluir a pessoa
            await _contexto.SaveChangesAsync(); //Persistindo(salvando) a transaçao no banco de dados.            
            return Ok();
        }
    }
}