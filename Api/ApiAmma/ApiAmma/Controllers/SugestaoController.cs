using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiAmma.Models;
using Microsoft.AspNetCore.Http;
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
        private UsuarioData _usuarioDataTemp = new UsuarioData();

        [HttpPost]
        [Route("adicionar")]
        public bool adicionar(SugestaoModel sugestao)
        {
            bool sucess = _sugestaoDataTemp.Insert(sugestao);
            // if (!sucess)
            // {
            //     //throw new ResultadoException(Alerta.WARNING, Alerta.NENHUM_USUARIO);
            // }

            return sucess;
        }

        [HttpGet]
        [Route("buscaTopTicketUsuario")]
        public List<SugestaoModel> buscaTopTicketUsuario(int idUsuario)
        {
            return _sugestaoDataTemp.SelectAllPorUsuario(idUsuario);
        }

        [HttpGet]
        [Route("buscaSugestoesPorStatus")]
        public List<SugestaoModel> buscaSugestoesPorStatus(string status)
        {
            List<SugestaoModel> lista = _sugestaoDataTemp.SelectAllStatus(status);
            int posicao = 0;

            foreach (var element in lista)
            {
                lista[posicao].usuario = _usuarioDataTemp.SelectId(element.id.ToString());
                posicao += 1;
            }
            return lista;
        }

        [HttpPost]
        [Route("aprovar")]
        public bool aprovar(SugestaoModel sugestao)
        {
            bool sucess = _sugestaoDataTemp.UpdateStatus(sugestao);

            return sucess;
        }

        [HttpPost]
        [Route("apagar")]
        public bool apagar(dynamic idSugestao)
        {
            return _sugestaoDataTemp.apagar(idSugestao.ToString());
        }

        [HttpGet]
        [Route("graficoPendenteSolucionado")]
        public List<GraficoDto> graficoPendenteSolucionado()
        {
            List<SugestaoModel> totalBruto = _sugestaoDataTemp.SelectAllSolucionadoPendente();
            List<SugestaoModel> totalBrutoPendente = _sugestaoDataTemp.SelectGrafico("1");

             List<GraficoDto> listaFinal = new  List<GraficoDto>();
             GraficoDto grafico = new  GraficoDto();

            int total = ((totalBrutoPendente.Count()*100)/totalBruto.Count());

            Console.WriteLine("\n\n\n");
            Console.WriteLine("totalBrutoPendente " + totalBrutoPendente.Count());
            Console.WriteLine("\n\n\n");
             Console.WriteLine("\n\n\n");
            Console.WriteLine("total " + total);
            Console.WriteLine("\n\n\n");

            grafico.legenda = "Pendente";
            grafico.porcentagem = total.ToString();
            listaFinal.Add(grafico);

            grafico.legenda = "Solucionado";
            grafico.porcentagem = ((total - 100)*-1).ToString();
            listaFinal.Add(grafico);


            return listaFinal;
        }

    }
}
