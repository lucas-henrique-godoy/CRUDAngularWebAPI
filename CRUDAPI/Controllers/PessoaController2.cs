using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Controllers
{
   [ApiController]
   [Route("api/[controller]")]
   public class PessoaController2 : ControllerBase
   {
      private readonly Contexto _contexto;
      public PessoaController2(Contexto contexto)
      {
         _contexto = contexto;
      }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<Pessoa>>> PegarTodosAsync()
      {
         return await _contexto.Pessoas.ToListAsync();
      }

      
      

   }
   
}