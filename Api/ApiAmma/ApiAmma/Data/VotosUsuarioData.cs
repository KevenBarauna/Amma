using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;

namespace ApiAmma.Data
{
    public class VotosUsuarioData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "usuario_votos";
        //COLUNAS TABELA
        string id = "id";
        string idUsuario = "idUsuario";
        string idSugestao = "idSugestao";

        private UsuarioVotosModel ConverRowToModel(SqlDataReader row)
        {
            row.Read();
            UsuarioVotosModel userVotos = new UsuarioVotosModel();

            userVotos.id = Convert.ToInt32(row[id]);
            userVotos.idUsuario = Convert.ToInt32(row[idUsuario]);
            userVotos.idSugestao = Convert.ToInt32(row[idSugestao]);

            return userVotos;
        }

        private List<UsuarioVotosModel> ConverRowToListModel(SqlDataReader row)
        {
            List<UsuarioVotosModel> userVotosList = new List<UsuarioVotosModel>();

            foreach (var linha in row)
            {
                UsuarioVotosModel userVotos = new UsuarioVotosModel();

                userVotos.id = Convert.ToInt32(row[id]);
                userVotos.idUsuario = Convert.ToInt32(row[idUsuario]);
                userVotos.idSugestao = Convert.ToInt32(row[idSugestao]);
                userVotosList.Add(userVotos);

            }

            return userVotosList;
        }


        //SELECT
        public List<int> SelectIdUser(int idPesquisar)
        {
            SqlDataReader row;
            List<UsuarioVotosModel> userVotosList = new List<UsuarioVotosModel>();
            List<int> ids = new List<int>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {idUsuario} = @idPesquisar";

                cmd.Parameters.AddWithValue("@idPesquisar", idPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    userVotosList = ConverRowToListModel(row);
                }
                foreach (var linha in userVotosList)
                {
                    ids.Add(linha.idUsuario);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectIdUser", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return ids;
        }

        public List<int> SelectIdSugestao(int idPesquisar)
        {
            SqlDataReader row;
            List<UsuarioVotosModel> userVotosList = new List<UsuarioVotosModel>();
            List<int> ids = new List<int>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {idSugestao} = @idPesquisar";

                cmd.Parameters.AddWithValue("@idPesquisar", idPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    userVotosList = ConverRowToListModel(row);
                }
                foreach (var linha in userVotosList)
                {
                    ids.Add(linha.idSugestao);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectIdSugestao", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return ids;
        }

        public bool Select(int idUsuarioSelect, int idSugestaoSelect)
        {
            SqlDataReader row;
            bool removerVoto = false;

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {idUsuario} = @idUsuario AND {idSugestao} = @idSugestao";

                cmd.Parameters.AddWithValue("@idUsuario", idUsuarioSelect);
                cmd.Parameters.AddWithValue("@idSugestao", idSugestaoSelect);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    List<UsuarioVotosModel> userVotosList = ConverRowToListModel(row);
                    if (userVotosList.Count > 0)
                    {
                        removerVoto = true;
                    }
                    else { removerVoto = false; }
                }


            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectIdUser", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return removerVoto;
        }
        //INSERT
        public bool Insert(int idUsuarioInsert, int idSugestaoInsert)
        {
            try
            {
                string campos = $"{idUsuario},{idSugestao}";
                string valores = $"@idUsuario,@idSugestao";

                cmd.CommandText = $"INSERT INTO {tabela} ({campos}) VALUES ({valores})";

                cmd.Parameters.AddWithValue("@idUsuario", idUsuarioInsert);
                cmd.Parameters.AddWithValue("@idSugestao", idSugestaoInsert);

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
            }
            return true;

        }

        //DELETE
        public bool Delete(int idUsuarioDelete, int idSugestaoDelete)
        {
            try
            {

                cmd.CommandText = $"DELETE FROM {tabela} WHERE {idSugestao} = @idSugestao AND {idUsuario} = @idUsuario";

                cmd.Parameters.AddWithValue("@idUsuario", idUsuarioDelete);
                cmd.Parameters.AddWithValue("@idSugestao", idSugestaoDelete);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("Delete", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }
            return true;

        }

    }

}
