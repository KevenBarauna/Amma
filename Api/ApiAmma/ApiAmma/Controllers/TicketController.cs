using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiAmma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ApiAmma.DTO;
using ApiAmma.Data;
using ApiAmma.Excecao;

namespace ApiAmma.Controllers
{
    [Route("api/ticket")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private TicketData _ticketDataTemp = new TicketData();

        [HttpGet]
        [Route("buscarTipos")]
        public List<TicketModel> buscarTipos()
        {
            return _ticketDataTemp.SelectAll();
        }


    }
}
