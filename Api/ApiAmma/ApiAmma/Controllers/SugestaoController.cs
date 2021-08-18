using System;
using System.Collections.Generic;
using System.Linq;
using ApiAmma.Models;
using Microsoft.AspNetCore.Mvc;
using ApiAmma.DTO;
using ApiAmma.Data;
using ApiAmma.Excecao;

namespace ApiAmma.Controllers
{
    [Route("api/sugestao")]
    [ApiController]
    public class SugestaoController : ControllerBase
    {
        private SugestaoData _sugestaoDataTemp = new SugestaoData();
        private CategoriaData _categoriaDataTemp = new CategoriaData();
        private StatusData _statusDataTemp = new StatusData();
        private UsuarioData _usuarioDataTemp = new UsuarioData();
        private VotosUsuarioData _votosUsuarioDataTemp = new VotosUsuarioData();
        private ValidarSugestao _validar = new ValidarSugestao();

        [HttpPost]
        [Route("adicionar")]
        public bool adicionar(SugestaoModel sugestao)
        {
            SugestaoModel sugestaoModel = _validar.adicionarNovaSugestao(sugestao);
            return _sugestaoDataTemp.Insert(sugestaoModel);
        }

        [HttpGet]
        [Route("buscarTopSugestaoUsuario")]
        public List<SugestaoModel> buscarTopSugestaoUsuario(int idUsuario)
        {
            if (idUsuario == 0)
            {
                throw new ArgumentException("Usuário não encontrado", nameof(idUsuario));
            }
            return _sugestaoDataTemp.SelectTopTres(idUsuario);
        }

        [HttpGet]
        [Route("buscarTopDez")]
        public List<SugestaoModel> buscarTopDez()
        {
            return _sugestaoDataTemp.SelectTopDez();
        }

        [HttpGet]
        [Route("buscarTodos")]
        public List<SugestaoModel> buscarTodos()
        {
            return _sugestaoDataTemp.SelectAll();
        }

        [HttpGet]
        [Route("buscarTodosPorStatus")]
        public List<SugestaoDto> buscarTodosPorStatus(int idStatus)
        {
            List<SugestaoModel> listaSugestao = _sugestaoDataTemp.SelectAllPorStatus(idStatus);
            List<SugestaoDto> listaSugestaoDto = new List<SugestaoDto>();
            foreach (var sugestao in listaSugestao)
            {
                UsuarioModel usuario = _usuarioDataTemp.SelectId(sugestao.idUsuario.ToString());
                SugestaoDto dto = new SugestaoDto();
                dto.sugestao = sugestao;
                dto.usuario = usuario;
                listaSugestaoDto.Add(dto);
            }

            return listaSugestaoDto;
        }

        [HttpGet]
        [Route("buscarPorcentagemPorCategoria")]
        public List<GraficoDto> buscarPorcentagemPorCategoria()
        {
            List<SugestaoModel> totalBruto = _sugestaoDataTemp.SelectAll();
            List<CategoriaModel> todasCategorias = _categoriaDataTemp.SelectAll();
            List<GraficoDto> graficoCalculado = new List<GraficoDto>();
            if (totalBruto.Count == 0) return graficoCalculado;
            foreach (var item in todasCategorias)
            {
                List<SugestaoModel> totalBrutoCategoria = _sugestaoDataTemp.SelectCategoria(item.id);
                GraficoDto grafico = new GraficoDto();
                grafico.id = item.id;
                grafico.nome = item.descricao;
                grafico.porcentagem = ((totalBrutoCategoria.Count() * 100) / totalBruto.Count()).ToString();
                graficoCalculado.Add(grafico);
            }
            return graficoCalculado;
        }

        [HttpGet]
        [Route("buscarPorcentagemPorStatus")]
        public List<GraficoDto> buscarPorcentagemPorStatus()
        {
            List<SugestaoModel> totalBruto = _sugestaoDataTemp.SelectAll();
            List<StatusModel> todosStatus = _statusDataTemp.SelectAll();
            List<GraficoDto> graficoCalculado = new List<GraficoDto>();
            if (totalBruto.Count == 0) return graficoCalculado;
            foreach (var item in todosStatus)
            {
                List<SugestaoModel> totalBrutoStatus = _sugestaoDataTemp.SelectStatus(item.id);
                GraficoDto grafico = new GraficoDto();
                grafico.id = item.id;
                grafico.nome = item.descricao;
                grafico.porcentagem = ((totalBrutoStatus.Count() * 100) / totalBruto.Count()).ToString();
                graficoCalculado.Add(grafico);
            }
            return graficoCalculado;

        }


        [HttpPut]
        [Route("votar")]
        public bool votar(int idUsuario, int idSugestao)
        {
            SugestaoModel sugestao = _sugestaoDataTemp.SelectId(idSugestao);
            int quantidadeAtual = sugestao.quantidadeVotos;
            bool removerVoto = _votosUsuarioDataTemp.Select(idUsuario, idSugestao);
            if (removerVoto)
            {
                int votos = quantidadeAtual - 1;
                _votosUsuarioDataTemp.Delete(idUsuario, idSugestao);
                _sugestaoDataTemp.UpdateVotos(votos, idSugestao);
            }
            else
            {
                int votos = quantidadeAtual + 1;
                _votosUsuarioDataTemp.Insert(idUsuario, idSugestao);
                _sugestaoDataTemp.UpdateVotos(votos, idSugestao);

            }
            return true;

        }

        [HttpPut]
        [Route("alterarStatus")]
        public bool alterarStatus(int idStatus, int idSugestao)
        {
            return _sugestaoDataTemp.UpdateStatus(idStatus, idSugestao);
        }

        [HttpPut]
        [Route("cancelarSugestao")]
        public bool cancelarSugestao(int idSugestao, string justificativa)
        {
            return _sugestaoDataTemp.UpdateStatusJustificativa(idSugestao, justificativa);
        }

        [HttpGet]
        [Route("verificarNotificacao")]
        public List<SugestaoModel> verificarNotificacao(int idUser)
        {
            return _sugestaoDataTemp.SelectNotificacao(idUser);
        }

        [HttpPut]
        [Route("lerNotificacao")]
        public bool lerNotificacao(int idSugestao)
        {
            return _sugestaoDataTemp.updateNotificacao(idSugestao);
        }
    }
}
