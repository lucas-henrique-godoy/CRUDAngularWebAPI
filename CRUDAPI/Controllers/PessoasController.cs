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
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
         private readonly Contexto _contexto;

         public PessoasController(Contexto contexto)
         {
            _contexto = contexto;
         }

         [HttpGet]
         public async Task<ActionResult<IEnumerable<Pessoa>>> PegarTodosAsync()
         {
            return await _contexto.Pessoas.ToListAsync();
         }

         [HttpGet("{PessoaId}")]
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

         [HttpPost]
         public async Task<ActionResult<Pessoa>> SalvarPessoaAsync(Pessoa pessoa)
         {
            await _contexto.Pessoas.AddAsync(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
         }

         [HttpPut]
         
    }
}