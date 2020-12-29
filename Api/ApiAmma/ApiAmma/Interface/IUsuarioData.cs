using System.Collections.Generic;
using ApiAmma.Models;
using ApiAmma.Data;
using System;

namespace ApiAmma.Interface
{
    public interface IUsuarioData
    {
        bool Insert(UsuarioModel user);
        UsuarioModel SelectId(string idBusca);
        List<UsuarioModel> SelectAll();
        bool Update(UsuarioModel user);
        UsuarioModel SelectNomeSenha(String nomeBuscar, String senhaBuscar);
    }
}
