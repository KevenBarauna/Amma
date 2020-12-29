using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;
using ApiAmma.Data;
using ApiAmma.Interface;
using ApiAmma.DTO;

namespace ApiAmma.Data
{
    public class TicketData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "TICKET";
        //COLUNAS TABELA
        string id = "id";
        string titulo = "titulo";

        public List<TicketModel> SelectAll()
        {
            SqlDataReader row;
            List<TicketModel> ticketsModels = new List<TicketModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela}";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {

                    foreach (var linha in row)
                    {
                        var ticket = new TicketModel();

                        ticket.id = Convert.ToInt32(row[id]);
                        ticket.titulo = Convert.ToString(row[titulo]);

                        ticketsModels.Add(ticket);
                    }
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e}");
            }
            cmd.Parameters.Clear();
            conexao.Desconectar();

            return ticketsModels;
        }

    }

}
