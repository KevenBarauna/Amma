using System.Collections.Generic;
using ApiAmma.Models;
using Microsoft.AspNetCore.Mvc;
using ApiAmma.DTO;
using ApiAmma.Data;
using ApiAmma.Excecao;
using System;

namespace ApiAmma.Controllers
{
    [Route("api/usuario")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private UsuarioData _usuarioDataTemp = new UsuarioData();
        private ValidarUsuario _validar = new ValidarUsuario();

        [HttpPost]
        [Route("login")]
        public UsuarioModel login(LoginDto dto)
        {
            LoginDto userValido = _validar.login(dto);
            UsuarioModel user = _usuarioDataTemp.SelectNomeSenha(userValido.nome, userValido.senha);
            if (user.id == 0)
            {
                throw new ArgumentException("Usuário não encontrado", nameof(dto.nome));
            }

            return user;
        }

        [HttpPost]
        [Route("novoUsuario")]
        public UsuarioModel adicionarNovoUsuario(UsuarioModel usuario)
        {

            return _usuarioDataTemp.Insert(_validar.adicionarNovoUsuario(usuario));

        }

        [HttpGet]
        [Route("buscarTodosUsuarios")]
        public List<UsuarioModel> buscarTodosUsuarios()
        {
            return _usuarioDataTemp.SelectAll();
        }

        [HttpDelete]
        [Route("removerUsuario")]
        public void removerUsuario([FromBody] UsuarioModel usuario)
        {
            //usuarios.RemoveAt(usuarios.IndexOf(usuarios.First(x => x.Equals(usuario))));
        }
    }
}
