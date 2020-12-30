using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;
using ApiAmma.Data;
using ApiAmma.DTO;

namespace ApiAmma.Data
{
    public class UsuarioData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "USUARIO";
        //COLUNAS TABELA
        string id = "id";
        string nome = "nome";
        string senha = "senha";
        string tema = "idTema";
        string idAvatar = "idAvatar";
        string cargo = "cargo";


        public UsuarioModel Insert(UsuarioModel user)
        {
            bool sucess = false;
            var usuario = new UsuarioModel();
            try
            {
                cmd.CommandText = $"INSERT INTO {tabela} ({nome},{senha},{tema},{idAvatar},{cargo}) VALUES (@nome,@senha,@tema,@idAvatar,@cargo)";

                cmd.Parameters.AddWithValue("@nome", user.nome);
                cmd.Parameters.AddWithValue("@senha", user.senha);
                cmd.Parameters.AddWithValue("@tema", user.idTema);
                cmd.Parameters.AddWithValue("@idAvatar", user.idAvatar);
                cmd.Parameters.AddWithValue("@cargo", user.cargo);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();
                cmd.Parameters.Clear();
                conexao.Desconectar();
                sucess = true;

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            if(sucess){
                usuario = SelectLast();
            }
              
            return usuario;
        }

        public UsuarioModel SelectLast()
        {
            var user = new UsuarioModel();

            try
            {
                SqlDataReader row;

                cmd.CommandText = $"SELECT * FROM {tabela} ORDER BY {id} DESC";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    row.Read();

                    user.id = Convert.ToInt32(row[id]);
                    user.nome = Convert.ToString(row[nome]);
                    user.idTema = Convert.ToInt32(row[tema]);
                    user.cargo = Convert.ToString(row[cargo]);
                    user.idAvatar = Convert.ToInt32(row[idAvatar]);

                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            cmd.Parameters.Clear();
            conexao.Desconectar();

            return user;
        }

        public UsuarioModel SelectId(string idBusca)
        {
            var user = new UsuarioModel();

            try
            {
                SqlDataReader row;

                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {id} = @id";

                cmd.Parameters.AddWithValue("@id", idBusca);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    row.Read();

                    user.id = Convert.ToInt32(row[id]);
                    user.nome = Convert.ToString(row[nome]);
                    user.senha = Convert.ToString(row[senha]);
                    user.idTema = Convert.ToInt32(row[tema]);
                    user.cargo = Convert.ToString(row[cargo]);
                    user.idAvatar = Convert.ToInt32(row[idAvatar]);

                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            cmd.Parameters.Clear();
            conexao.Desconectar();

            return user;
        }



        //RETORNA TODOS OS PRODUTOS
        public List<UsuarioModel> SelectAll()
        {
            SqlDataReader row;
            List<UsuarioModel> usuariosModel = new List<UsuarioModel>();

            try
            {
                cmd.CommandText = $"SELECT * {tabela}";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {

                    foreach (var linha in row)
                    {
                        var user = new UsuarioModel();

                        user.id = Convert.ToInt32(row[id]);
                        user.nome = Convert.ToString(row[nome]);
                        user.senha = Convert.ToString(row[senha]);
                        user.idTema = Convert.ToInt32(row[tema]);
                        user.cargo = Convert.ToString(row[cargo]);
                        user.idAvatar = Convert.ToInt32(row[idAvatar]);

                        usuariosModel.Add(user);
                    }
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            cmd.Parameters.Clear();
            conexao.Desconectar();

            return usuariosModel;
        }

        //EDITAR
        public bool Update(UsuarioModel user)
        {
            try
            {

                cmd.CommandText = $"UPDATE {tabela} SET nome = @nome, senha = @senha, tema = @tema, idAvatar = @idAvatar, cargo = @cargo WHERE id = @id";

                cmd.Parameters.AddWithValue("@nome", user.nome);
                cmd.Parameters.AddWithValue("@senha", user.senha);
                cmd.Parameters.AddWithValue("@tema", user.idTema);
                cmd.Parameters.AddWithValue("@idAvatar", user.idAvatar);
                cmd.Parameters.AddWithValue("@cargo", user.cargo);
                cmd.Parameters.AddWithValue("@id", user.id);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();
                cmd.Parameters.Clear();
                conexao.Desconectar();

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
                return false;
            }

            return true;
        }


        //VERIFICA LOGIN
        public UsuarioModel SelectNomeSenha(String nomeBuscar, String senhaBuscar)
        {
            var user = new UsuarioModel();

            try
            {
                SqlDataReader row;

                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {nome} = @nome AND {senha} = @senha ";

                cmd.Parameters.AddWithValue("@nome", nomeBuscar);
                cmd.Parameters.AddWithValue("@senha", senhaBuscar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    row.Read();

                    user.id = Convert.ToInt32(row[id]);
                    user.nome = Convert.ToString(row[nome]);
                    user.idTema = Convert.ToInt32(row[tema]);
                    user.cargo = Convert.ToString(row[cargo]);
                    user.idAvatar = Convert.ToInt32(row[idAvatar]);

                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            cmd.Parameters.Clear();
            conexao.Desconectar();
            return user;
        }


    }
}
