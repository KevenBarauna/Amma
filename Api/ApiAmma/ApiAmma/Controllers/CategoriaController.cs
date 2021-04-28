using System.Collections.Generic;
using ApiAmma.Models;
using Microsoft.AspNetCore.Mvc;
using ApiAmma.Data;

namespace ApiAmma.Controllers
{
    [Route("api/categoria")]
    [ApiController]
    public class CategoriaController : ControllerBase
    {
        private CategoriaData _categoriaDataTemp = new CategoriaData();


        [HttpGet]
        [Route("buscarTodos")]
        public List<CategoriaModel> buscarTodos()
        {
            return _categoriaDataTemp.SelectAll();
        }

    }
}
