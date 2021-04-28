using System.Collections.Generic;
using ApiAmma.Models;
using Microsoft.AspNetCore.Mvc;
using ApiAmma.Data;

namespace ApiAmma.Controllers
{
    [Route("api/status")]
    [ApiController]
    public class StatusController : ControllerBase
    {
        private StatusData _statusDataTemp = new StatusData();


        [HttpGet]
        [Route("buscarTodosStatus")]
        public List<StatusModel> buscarTodosStatus()
        {
            return _statusDataTemp.SelectAll();
        }

    }
}
