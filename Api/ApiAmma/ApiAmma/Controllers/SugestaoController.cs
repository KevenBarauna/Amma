using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiAmma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ApiAmma.DTO;
using ApiAmma.Data;
using ApiAmma.Interface;
using ApiAmma.Excecao;

namespace ApiAmma.Controllers
{
    [Route("api/sugestao")]
    [ApiController]
    public class SugestaoController : ControllerBase
    {
        private SugestaoData _sugestaoDataTemp = new SugestaoData();

        [HttpPost]
        [Route("adicionar")]
        public bool adicionar(SugestaoModel sugestao)
        {
            bool sucess = _sugestaoDataTemp.Insert(sugestao);
            // if (!sucess)
            // {
            //     //throw new ResultadoException(Alerta.WARNING, Alerta.NENHUM_USUARIO);
            // }

            return sucess;
        }

        [HttpGet]
        [Route("buscaTopTicketUsuario")]
        public List<SugestaoModel> buscaTopTicketUsuario(int idUsuario)
        {
            return _sugestaoDataTemp.SelectAllPorUsuario(idUsuario);
        }

    }
}
