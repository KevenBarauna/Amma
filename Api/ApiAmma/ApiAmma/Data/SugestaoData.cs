using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;
using ApiAmma.Data;
using ApiAmma.Interface;
using ApiAmma.DTO;

namespace ApiAmma.Data
{
    public class SugestaoData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "SUGESTAO";
        //COLUNAS TABELA
        string id = "id";
        string idTipo = "idTipo";
        string idUsuario = "idUsuario";
        string idStatus = "idStatus";
        string data = "data";
        string titulo = "titulo";
        string descricao = "descricao";
        string votos = "votos";


        public bool Insert(SugestaoModel sugestao)
        {
            try
            {
                cmd.CommandText = $"INSERT INTO {tabela} ({idTipo},{idUsuario},{idStatus},{data},{titulo},{descricao},{votos}) VALUES (@idTipo,@idUsuario,@idStatus,@data,@titulo,@descricao,@votos)";

                cmd.Parameters.AddWithValue("@idTipo", sugestao.idTipo);
                cmd.Parameters.AddWithValue("@idUsuario", sugestao.idUsuario);
                cmd.Parameters.AddWithValue("@idStatus", "1");
                cmd.Parameters.AddWithValue("@data", sugestao.data);
                cmd.Parameters.AddWithValue("@titulo", sugestao.titulo);
                cmd.Parameters.AddWithValue("@descricao", sugestao.descricao);
                cmd.Parameters.AddWithValue("@votos", "0");

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

        public List<SugestaoModel> SelectAllPorUsuario(int idUsuarioPesquisar)
        {
            SqlDataReader row;
            List<SugestaoModel> sugestoesModels = new List<SugestaoModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {idUsuario} = @idUsuarioPesquisar ORDER BY {votos}";

                cmd.Parameters.AddWithValue("@idUsuarioPesquisar", idUsuarioPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {

                    foreach (var linha in row)
                    {
                        var sug = new SugestaoModel();

                        sug.id = Convert.ToInt32(row[id]);
                        sug.idTipo = Convert.ToInt32(row[idTipo]);
                        sug.idStatus = Convert.ToInt32(row[idStatus]);
                        sug.idUsuario = Convert.ToInt32(row[idUsuario]);
                        sug.data = Convert.ToString(row[data]);
                        sug.titulo = Convert.ToString(row[titulo]);
                        sug.descricao = Convert.ToString(row[descricao]);
                        sug.votos = Convert.ToInt32(row[votos]);

                        sugestoesModels.Add(sug);
                    }
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            cmd.Parameters.Clear();
            conexao.Desconectar();

            return sugestoesModels;
        }

    }

}
