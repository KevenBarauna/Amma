using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;

namespace ApiAmma.Data
{
    public class StatusData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "status";
        //COLUNAS TABELA
        string id = "id";
        string descricao = "descricao";

        private StatusModel ConverRowToModel(SqlDataReader row)
        {
            row.Read();
            StatusModel status = new StatusModel();

            status.id = Convert.ToInt32(row[id]);
            status.descricao = Convert.ToString(row[descricao]);

            return status;
        }

        private List<StatusModel> ConverRowToListModel(SqlDataReader row)
        {
            List<StatusModel> statusList = new List<StatusModel>();

            foreach (var linha in row)
            {
                StatusModel status = new StatusModel();

                status.id = Convert.ToInt32(row[id]);
                status.descricao = Convert.ToString(row[descricao]);

                statusList.Add(status);

            }

            return statusList;
        }


        //SELECT
        public StatusModel SelectId(int idPesquisar)
        {
            SqlDataReader row;
            StatusModel statusModel = new StatusModel();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {id} = @idPesquisar";

                cmd.Parameters.AddWithValue("@idPesquisar", idPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    statusModel = ConverRowToModel(row);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectId", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return statusModel;
        }

        public List<StatusModel> SelectAll()
        {
            SqlDataReader row;
            List<StatusModel> statusList = new List<StatusModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela}";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    statusList = ConverRowToListModel(row);
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

            return statusList;
        }

    }

}
