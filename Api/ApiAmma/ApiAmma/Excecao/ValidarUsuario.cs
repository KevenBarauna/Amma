using ApiAmma.Data;
using ApiAmma.DTO;
using ApiAmma.Models;
using System;

namespace ApiAmma.Excecao
{

    public class ValidarUsuario
    {

        private UsuarioData _data = new UsuarioData();

        public UsuarioModel adicionarNovoUsuario(UsuarioModel usuario)
        {
            //CAMPOS OBRIGATORIOS
            if(usuario.nome == null || usuario.nome == ""){
                throw new ArgumentException("O campo nome é obrigatório", nameof(usuario.nome));
            }
            else if(usuario.senha == null || usuario.senha == ""){
                throw new ArgumentException("O campo senha é obrigatório", nameof(usuario.senha));
            }
            else if(usuario.email == null || usuario.email == ""){
                throw new ArgumentException("O campo senha é obrigatório", nameof(usuario.email));
            }
            usuario.idAvatar = 1;

            //VALIDAR NOME USUARIO
            var user = _data.SelectByName(usuario.nome);
            if(user.id != 0){
                throw new ArgumentException("Já existe um usuário cadastrado com esse nome", nameof(usuario.nome));
            }

            return usuario;

        }

        public LoginDto login(LoginDto dto)
        {
            //CAMPOS OBRIGATORIOS
            if(dto.nome == null || dto.nome == ""){
                throw new ArgumentException("O campo nome é obrigatório", nameof(dto.nome));
            }
            else if(dto.senha == null || dto.senha == ""){
                throw new ArgumentException("O campo senha é obrigatório", nameof(dto.senha));
            }

            return dto;

        }

        
    }
}
