using ApiAmma.Data;
using ApiAmma.DTO;
using ApiAmma.Models;
using System;

namespace ApiAmma.Excecao
{

    public class ValidarSugestao
    {

        private SugestaoData _data = new SugestaoData();
        private StatusData _dataStatus = new StatusData();

        public SugestaoModel adicionarNovaSugestao(SugestaoModel sugestao)
        {
            //CAMPOS OBRIGATORIOS
            if(sugestao.titulo == null || sugestao.titulo == ""){
                throw new ArgumentException("O campo título é obrigatório", nameof(sugestao.titulo));
            }
            else if(sugestao.descricao == null || sugestao.descricao == ""){
                throw new ArgumentException("O campo descrição é obrigatório", nameof(sugestao.descricao));
            }
            else if(sugestao.idCategoria == 0){
                throw new ArgumentException("Informe o tipo de sugestão", nameof(sugestao.idCategoria));
            }

            else if(sugestao.data == null || sugestao.data == ""){
                throw new ArgumentException("Data não disponível", nameof(sugestao.data));
            }
            else if(sugestao.idUsuario == 0){
                throw new ArgumentException("Usuário não disponível", nameof(sugestao.idUsuario));
            }

            sugestao.quantidadeVotos = 0;
            sugestao.idStatus = 1;

            return sugestao;

        }

        public bool updateStatus( int idStatus ){

            // var status = _dataStatus.Select(idStatus);
            // if(status.id != 0){
            //     throw new ArgumentException("Já existe um usuário cadastrado com esse nome", nameof(status.id));
            // }
            return true;
        }

        public int updateVotos( int idSugestao, int voto ){

            int votoSomar = 0;
            var sugestao = _data.SelectId(idSugestao);
            if(sugestao.id == 0){
                throw new ArgumentException("Sugestão não encontrada", nameof(idSugestao));
            }
            votoSomar = voto == 0 ? 1 : 0;

            int novoValor = Convert.ToInt32(sugestao.quantidadeVotos) + votoSomar;
            return novoValor;
        }


        
    }
}
