using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;
using ApiAmma.Data;
using ApiAmma.DTO;

namespace ApiAmma.Data
{
    public class StatusData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "STATUS";
        //COLUNAS TABELA
        string id = "id";
        string tipo = "tipo";

        public StatusModel SelectPorNome(string status)
        {
            SqlDataReader row;
            StatusModel statusModel = new StatusModel();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {tipo} = @status";

                cmd.Parameters.AddWithValue("@status", status);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {

                    foreach (var linha in row)
                    {
                        statusModel.id = Convert.ToInt32(row[id]);
                        statusModel.tipo = Convert.ToString(row[tipo]);
                    }
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            cmd.Parameters.Clear();
            conexao.Desconectar();

            return statusModel;
        }

    }

}
