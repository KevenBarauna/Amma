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
        [Route("buscarPorcentagemPorCategoria")]
        public int buscarPorcentagemPorCategoria(int idCategoria)
        {
            List<SugestaoModel> totalBruto = _sugestaoDataTemp.SelectStatus(1);
            List<SugestaoModel> totalBrutoCategoria = _sugestaoDataTemp.SelectCategoria(idCategoria);

            return ((totalBrutoCategoria.Count() * 100) / totalBruto.Count());

        }

        [HttpGet]
        [Route("buscarPorcentagemPorStatus")]
        public int buscarPorcentagemPorStatus(int idStatus)
        {
            List<SugestaoModel> totalBruto = _sugestaoDataTemp.SelectAll();
            List<SugestaoModel> totalBrutoStatus = _sugestaoDataTemp.SelectStatus(idStatus);

            return ((totalBrutoStatus.Count() * 100) / totalBruto.Count());

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
