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
    [Route("api/usuario")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private UsuarioData _usuarioDataTemp = new UsuarioData();

        [HttpPost]
        [Route("login")]
        public UsuarioModel login(LoginDto dto)
        {
            UsuarioModel user = _usuarioDataTemp.SelectNomeSenha(dto.nome, dto.senha);
            if (user.id == 0)
            {
                //throw new ResultadoException(Alerta.WARNING, Alerta.NENHUM_USUARIO);
            }

            return user;
        }

        [HttpPost]
        [Route("novoUsuario")]
        public UsuarioModel adicionarNovoUsuario(UsuarioModel usuario)
        {
            return _usuarioDataTemp.Insert(usuario);

        }

        [HttpGet]
        [Route("buscarTodosUsuarios")]
        public List<UsuarioModel> buscarTodosUsuarios()
        {
            List<UsuarioModel> usuarios = new List<UsuarioModel>();
            return usuarios;
        }

        [HttpDelete]
        [Route("removerUsuario")]
        public void removerUsuario([FromBody] UsuarioModel usuario)
        {
            //usuarios.RemoveAt(usuarios.IndexOf(usuarios.First(x => x.Equals(usuario))));
        }
    }
}
