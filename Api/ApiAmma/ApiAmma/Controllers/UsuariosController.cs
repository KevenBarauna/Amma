using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiAmma.DAO;
using ApiAmma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiAmma.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        UsuarioDAO userDao = new UsuarioDAO();

        [HttpGet]
        [Route("buscarTodosUsuarios")]
        public List<UsuarioModel> buscarTodosUsuarios()
        {
            return userDao.SelectAll();
        }

        [HttpPost]
        [Route("adicionarNovoUsuario")]
        public bool adicionarNovoUsuario(UsuarioModel usuario)
        {
            return userDao.Insert(usuario); ;
        }

        [HttpDelete]
        [Route("removerUsuario")]
        public void removerUsuario([FromBody]UsuarioModel usuario)
        {
            //usuarios.RemoveAt(usuarios.IndexOf(usuarios.First(x => x.Equals(usuario))));
        }
    }
}