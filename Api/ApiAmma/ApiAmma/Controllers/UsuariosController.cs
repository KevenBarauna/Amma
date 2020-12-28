using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiAmma.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ApiAmma.DTO;
using ApiAmma.Data;
namespace ApiAmma.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

       // private readonly UsuarioData _servicoUsuario;

        [HttpPost]
        [Route("login")]
        public UsuarioModel login(LoginDto dto)
        {
             var usuarioDataTeste = new UsuarioData();
             var user = usuarioDataTeste.SelectNomeSenha("cc","dd");
             return new UsuarioModel();
            // return _servicoUsuario.SelectNomeSenha("aa", "bb");
        }

        [HttpGet]
        [Route("buscarTodosUsuarios")]
        public List<UsuarioModel> buscarTodosUsuarios()
        {
            List<UsuarioModel> usuarios = new List<UsuarioModel>();
            return usuarios;
        }

        [HttpPost]
        [Route("adicionarNovoUsuario")]
        public bool adicionarNovoUsuario(UsuarioModel usuario)
        {
            return true;
        }

        [HttpDelete]
        [Route("removerUsuario")]
        public void removerUsuario([FromBody]UsuarioModel usuario)
        {
            //usuarios.RemoveAt(usuarios.IndexOf(usuarios.First(x => x.Equals(usuario))));
        }
    }
}
