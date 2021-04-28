using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ApiAmma.Models;

namespace ApiAmma.Data
{
    public class SugestaoData
    {
        Conexao conexao = new Conexao();
        SqlCommand cmd = new SqlCommand();

        //TABELA
        string tabela = "sugestoes";
        //COLUNAS TABELA
        string id = "id";
        string idCategoria = "idCategoria";
        string idUsuario = "idUsuario";
        string idStatus = "idStatus";
        string anonimo = "anonimo";
        string data = "data";
        string titulo = "titulo";
        string descricao = "descricao";
        string quantidadeVotos = "quantidadeVotos";

        private SugestaoModel ConverRowToModel(SqlDataReader row)
        {
            row.Read();
            SugestaoModel sugestao = new SugestaoModel();

            sugestao.id = Convert.ToInt32(row[id]);
            sugestao.idUsuario = Convert.ToInt32(row[idUsuario]);
            sugestao.idCategoria = Convert.ToInt32(row[idCategoria]);
            sugestao.idStatus = Convert.ToInt32(row[idStatus]);
            sugestao.anonimo = Convert.ToString(row[anonimo]);
            sugestao.titulo = Convert.ToString(row[titulo]);
            sugestao.descricao = Convert.ToString(row[descricao]);
            sugestao.quantidadeVotos = Convert.ToInt32(row[quantidadeVotos]);
            sugestao.data = Convert.ToString(row[data]);

            return sugestao;
        }

        private List<SugestaoModel> ConverRowToListModel(SqlDataReader row, int top = 0)
        {
            List<SugestaoModel> sugestoes = new List<SugestaoModel>();

            foreach (var linha in row)
            {
                SugestaoModel sugestao = new SugestaoModel();

                sugestao.id = Convert.ToInt32(row[id]);
                sugestao.idUsuario = Convert.ToInt32(row[idUsuario]);
                sugestao.idCategoria = Convert.ToInt32(row[idCategoria]);
                sugestao.idStatus = Convert.ToInt32(row[idStatus]);
                sugestao.anonimo = Convert.ToString(row[anonimo]);
                sugestao.titulo = Convert.ToString(row[titulo]);
                sugestao.descricao = Convert.ToString(row[descricao]);
                sugestao.quantidadeVotos = Convert.ToInt32(row[quantidadeVotos]);
                sugestao.data = Convert.ToString(row[data]);

                if (top > 0)
                {
                    if (sugestoes.Count < top)
                    {
                        sugestoes.Add(sugestao);
                    }
                    else
                    {
                        break;
                    }
                }
                else
                {
                    sugestoes.Add(sugestao);
                }


            }

            return sugestoes;
        }


        //INSERT
        public bool Insert(SugestaoModel sugestao)
        {
            try
            {
                string campos = $"{idCategoria},{idUsuario},{idStatus},{anonimo},{data},{titulo},{descricao},{quantidadeVotos}";
                string valores = $"@idCategoria,@idUsuario,@idStatus,@anonimo,@data,@titulo,@descricao,@quantidadeVotos";

                cmd.CommandText = $"INSERT INTO {tabela} ({campos}) VALUES ({valores})";

                cmd.Parameters.AddWithValue("@idCategoria", sugestao.idCategoria);
                cmd.Parameters.AddWithValue("@idUsuario", sugestao.idUsuario);
                cmd.Parameters.AddWithValue("@idStatus", sugestao.idStatus);
                cmd.Parameters.AddWithValue("@anonimo", sugestao.anonimo);
                cmd.Parameters.AddWithValue("@data", sugestao.data);
                cmd.Parameters.AddWithValue("@titulo", sugestao.titulo);
                cmd.Parameters.AddWithValue("@descricao", sugestao.descricao);
                cmd.Parameters.AddWithValue("@quantidadeVotos", sugestao.quantidadeVotos);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();
                cmd.Parameters.Clear();
                conexao.Desconectar();

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

        //SELECT
        public SugestaoModel SelectId(int idPesquisar)
        {
            SqlDataReader row;
            SugestaoModel sugestaoModel = new SugestaoModel();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {id} = @idPesquisar";

                cmd.Parameters.AddWithValue("@idPesquisar", idPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    sugestaoModel = ConverRowToModel(row);
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

            return sugestaoModel;
        }
        public List<SugestaoModel> SelectTopTres(int idUsuarioPesquisar)
        {
            SqlDataReader row;
            List<SugestaoModel> sugestoesModels = new List<SugestaoModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {idUsuario} = @idUsuarioPesquisar ORDER BY {quantidadeVotos}";

                cmd.Parameters.AddWithValue("@idUsuarioPesquisar", idUsuarioPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    sugestoesModels = ConverRowToListModel(row, 3);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectTopTres", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return sugestoesModels;
        }
        public List<SugestaoModel> SelectTopDez()
        {
            SqlDataReader row;
            List<SugestaoModel> sugestoesModels = new List<SugestaoModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} ORDER BY {quantidadeVotos}";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    sugestoesModels = ConverRowToListModel(row, 10);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectTopDez", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return sugestoesModels;
        }
        public List<SugestaoModel> SelectAll(int idUsuarioPesquisar)
        {
            SqlDataReader row;
            List<SugestaoModel> sugestoesModels = new List<SugestaoModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {idUsuario} = @idUsuarioPesquisar ORDER BY {data}";

                cmd.Parameters.AddWithValue("@idUsuarioPesquisar", idUsuarioPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    sugestoesModels = ConverRowToListModel(row, 0);
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

            return sugestoesModels;
        }
        public List<SugestaoModel> SelectAll()
        {
            SqlDataReader row;
            List<SugestaoModel> sugestoesModels = new List<SugestaoModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} ORDER BY {data}";

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {
                    sugestoesModels = ConverRowToListModel(row, 0);
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

            return sugestoesModels;
        }
        public List<SugestaoModel> SelectStatus(int idStatusPesquisar)
        {
            SqlDataReader row;
            List<SugestaoModel> sugestoesModels = new List<SugestaoModel>();

            try
            {
                cmd.CommandText = $"SELECT * FROM {tabela} WHERE {idStatus} = @status";

                cmd.Parameters.AddWithValue("@status", idStatusPesquisar);

                cmd.Connection = conexao.Conectar();
                row = cmd.ExecuteReader();

                if (row.HasRows)
                {

                    sugestoesModels = ConverRowToListModel(row, 0);
                }

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("SelectStatus", nameof(e.Message));
            }
            finally
            {
                cmd.Parameters.Clear();
                conexao.Desconectar();
            }

            return sugestoesModels;
        }

        //UPDATE
        public bool UpdateStatus(int idStatus, int idSugestao)
        {
            try
            {

                cmd.CommandText = $"UPDATE {tabela} SET idStatus = @idStatus WHERE id = @id";

                cmd.Parameters.AddWithValue("@id", idSugestao);
                cmd.Parameters.AddWithValue("@idStatus", idStatus);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();
                cmd.Parameters.Clear();
                conexao.Desconectar();

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

            return true;
        }
        public bool UpdateVotos(int qtdVotos, int idSugestao)
        {
            try
            {

                cmd.CommandText = $"UPDATE {tabela} SET votos = @votos WHERE id = @id";

                cmd.Parameters.AddWithValue("@id", idSugestao);
                cmd.Parameters.AddWithValue("@votos", qtdVotos);

                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();
                cmd.Parameters.Clear();
                conexao.Desconectar();

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

            return true;
        }
        public bool UpdateAll(SugestaoModel sugestao)
        {
            try
            {
                cmd.CommandText = $"UPDATE {tabela} SET idCategoria = @idCategoria, idUsuario = @idUsuario, idStatus = @idStatus, anonimo = @anonimo, data = @data, titulo = @titulo, descricao = @descricao, quantidadeVotos = @quantidadeVotos WHERE id = @id";

                cmd.Parameters.AddWithValue("@idCategoria", sugestao.idCategoria);
                cmd.Parameters.AddWithValue("@idUsuario", sugestao.idUsuario);
                cmd.Parameters.AddWithValue("@idStatus", sugestao.idStatus);
                cmd.Parameters.AddWithValue("@anonimo", sugestao.anonimo);
                cmd.Parameters.AddWithValue("@data", sugestao.data);
                cmd.Parameters.AddWithValue("@titulo", sugestao.titulo);
                cmd.Parameters.AddWithValue("@descricao", sugestao.descricao);
                cmd.Parameters.AddWithValue("@quantidadeVotos", sugestao.quantidadeVotos);


                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();
                cmd.Parameters.Clear();
                conexao.Desconectar();

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

            return true;
        }

        //DELETE
        public bool apagar(string idSugestao)
        {
            try
            {
                cmd.CommandText = $"DELETE FROM {tabela} WHERE {id} = @id";

                cmd.Parameters.AddWithValue("@id", idSugestao);


                cmd.Connection = conexao.Conectar();
                cmd.ExecuteNonQuery();
                cmd.Parameters.Clear();
                conexao.Desconectar();

            }
            catch (SqlException e)
            {
                Console.WriteLine($"Erro: {e.Message}\n\n");
                throw new ArgumentException("Apagar", nameof(e.Message));
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
