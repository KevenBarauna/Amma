using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;

namespace ApiAmma.Data
{
    public class CategoriaData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "categoria";
        //COLUNAS TABELA
        string id = "id";
        string descricao = "descricao";

        private CategoriaModel ConverRowToModel(SqlDataReader row)
        {
            row.Read();
            CategoriaModel categoria = new CategoriaModel();

            categoria.id = Convert.ToInt32(row[id]);
            categoria.descricao = Convert.ToString(row[descricao]);

            return categoria;
        }

        private List<CategoriaModel> ConverRowToListModel(SqlDataReader row)
        {
            List<CategoriaModel> categorias = new List<CategoriaModel>();

            foreach (var linha in row)
            {
                CategoriaModel categoria = new CategoriaModel();

                categoria.id = Convert.ToInt32(row[id]);
                categoria.descricao = Convert.ToString(row[descricao]);

                categorias.Add(categoria);

            }

            return categorias;
        }


        //SELECT
        public CategoriaModel SelectId(int idPesquisar)
        {
            SqlDataReader row;
            CategoriaModel categoriaModel = new CategoriaModel();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {id} = @idPesquisar";

                cmd.Parameters.AddWithValue("@idPesquisar", idPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    categoriaModel = ConverRowToModel(row);
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

            return categoriaModel;
        }

        public List<CategoriaModel> SelectAll()
        {
            SqlDataReader row;
            List<CategoriaModel> categoriaModels = new List<CategoriaModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela}";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    categoriaModels = ConverRowToListModel(row);
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

            return categoriaModels;
        }

    }

}
