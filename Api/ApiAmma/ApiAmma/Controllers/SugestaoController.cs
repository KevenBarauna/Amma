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
        private ValidarSugestao _validar = new ValidarSugestao();

        [HttpPost]
        [Route("adicionar")]
        public bool adicionar(SugestaoModel sugestao)
        {
            SugestaoModel sugestaoModel = _validar.adicionarNovaSugestao(sugestao);
            return _sugestaoDataTemp.Insert(sugestaoModel);
        }

        [HttpGet]
        [Route("buscaTopTicketUsuario")]
        public List<SugestaoModel> buscaTopTicketUsuario(int idUsuario)
        {
            return _sugestaoDataTemp.SelectTopTres(idUsuario);
        }

        [HttpGet]
        [Route("buscaTopDez")]
        public List<SugestaoModel> buscaTopDez()
        {
            return _sugestaoDataTemp.SelectTopDez();
        }

        [HttpGet]
        [Route("buscaTodos")]
        public List<SugestaoModel> buscaTodos()
        {
            return _sugestaoDataTemp.SelectAll();
        }

        // [HttpGet]
        // [Route("graficoPendenteSolucionado")]
        // public List<GraficoDto> graficoPendenteSolucionado()
        // {
        //     List<SugestaoModel> totalBruto = _sugestaoDataTemp.SelectAllSolucionadoPendente();
        //     List<SugestaoModel> totalBrutoPendente = _sugestaoDataTemp.SelectGrafico(1);

        //      List<GraficoDto> listaFinal = new  List<GraficoDto>();
        //      GraficoDto grafico = new  GraficoDto();

        //     int total = ((totalBrutoPendente.Count()*100)/totalBruto.Count());

        //     Console.WriteLine("\n\n\n");
        //     Console.WriteLine("totalBrutoPendente " + totalBrutoPendente.Count());
        //     Console.WriteLine("\n\n\n");
        //      Console.WriteLine("\n\n\n");
        //     Console.WriteLine("total " + total);
        //     Console.WriteLine("\n\n\n");

        //     grafico.legenda = "Pendente";
        //     grafico.porcentagem = total.ToString();
        //     listaFinal.Add(grafico);

        //     grafico.legenda = "Solucionado";
        //     grafico.porcentagem = ((total - 100)*-1).ToString();
        //     listaFinal.Add(grafico);


        //     return listaFinal;
        // }

    }
}
