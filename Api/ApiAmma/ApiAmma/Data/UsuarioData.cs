using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;

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
        string email = "email";
        string cargo = "cargo";
        string idAvatar = "idAvatar";

        private UsuarioModel ConverRowToModel(SqlDataReader row, bool showSenha = true)
        {
            row.Read();
            UsuarioModel usuario = new UsuarioModel();

            usuario.id = Convert.ToInt32(row[id]);
            usuario.nome = Convert.ToString(row[nome]);
            usuario.email = Convert.ToString(row[email]);
            usuario.cargo = Convert.ToString(row[cargo]);
            usuario.idAvatar = Convert.ToInt32(row[idAvatar]);
            if (showSenha) { usuario.senha = Convert.ToString(row[senha]); }

            return usuario;
        }

        private List<UsuarioModel> ConverRowToListModel(SqlDataReader row)
        {
            List<UsuarioModel> usuarioList = new List<UsuarioModel>();

            foreach (var linha in row)
            {
                var user = new UsuarioModel();

                user.id = Convert.ToInt32(row[id]);
                user.nome = Convert.ToString(row[nome]);
                user.senha = Convert.ToString(row[senha]);
                user.email = Convert.ToString(row[email]);
                user.cargo = Convert.ToString(row[cargo]);
                user.idAvatar = Convert.ToInt32(row[idAvatar]);

                usuarioList.Add(user);
            }

            return usuarioList;
        }

        public UsuarioModel Insert(UsuarioModel user)
        {
            var usuario = new UsuarioModel();
            try
            {
                cmd.CommandText = $"INSERT INTO {tabela} ({nome},{senha},{email},{idAvatar},{cargo}) VALUES (@nome,@senha,@email,@idAvatar,@cargo)";

                cmd.Parameters.AddWithValue("@nome", user.nome);
                cmd.Parameters.AddWithValue("@senha", user.senha);
                cmd.Parameters.AddWithValue("@email", user.email);
                cmd.Parameters.AddWithValue("@cargo", user.cargo);
                cmd.Parameters.AddWithValue("@idAvatar", user.idAvatar);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("Insert", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
                usuario = SelectByName(user.nome);
            }

            return usuario;
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
                    user = ConverRowToModel(row);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}");
                throw new ArgumentException("SelectId", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }


            return user;
        }

        public UsuarioModel SelectByName(string nomeBusca)
        {
            var user = new UsuarioModel();

            try
            {
                SqlDataReader row;

                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {nome} = @nome";

                cmd.Parameters.AddWithValue("@nome", nomeBusca);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    user = ConverRowToModel(row);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n\n");
                throw new ArgumentException("SelectByName", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return user;
        }


        public List<UsuarioModel> SelectAll()
        {
            SqlDataReader row;
            List<UsuarioModel> usuariosModel = new List<UsuarioModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela}";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {

                    usuariosModel = ConverRowToListModel(row);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectAll", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return usuariosModel;
        }

        //EDITAR
        public UsuarioModel Update(UsuarioModel user)
        {
            try
            {

                cmd.CommandText = $"UPDATE {tabela} SET nome = @nome, senha = @senha, email = @email, idAvatar = @idAvatar, cargo = @cargo WHERE id = @id";

                cmd.Parameters.AddWithValue("@nome", user.nome);
                cmd.Parameters.AddWithValue("@senha", user.senha);
                cmd.Parameters.AddWithValue("@email", user.email);
                cmd.Parameters.AddWithValue("@idAvatar", user.idAvatar);
                cmd.Parameters.AddWithValue("@cargo", user.cargo);
                cmd.Parameters.AddWithValue("@id", user.id);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("Update", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return SelectId(Convert.ToString(user.id));
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
                    user = ConverRowToModel(row, false);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n\n");
                throw new ArgumentException("SelectNomeSenha", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return user;
        }


    }
}
