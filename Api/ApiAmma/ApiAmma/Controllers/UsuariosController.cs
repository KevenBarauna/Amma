using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiAmma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApiAmma.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private static List<Usuario> usuarios = new List<Usuario>();

        [HttpGet]
        [Route("buscarTodosUsuarios")]
        public List<Usuario> buscarTodosUsuarios()
        {
            return usuarios;
        }

        [HttpPost]
        [Route("adicionarNovoUsuario")]
        public Usuario adicionarNovoUsuario([FromBody]Usuario usuario)
        {
            usuarios.Add(usuario);
            return usuario;
        }

        [HttpDelete]
        [Route("removerUsuario")]
        public void removerUsuario([FromBody]Usuario usuario)
        {
            usuarios.RemoveAt(usuarios.IndexOf(usuarios.First(x => x.Equals(usuario))));
        }
    }
}