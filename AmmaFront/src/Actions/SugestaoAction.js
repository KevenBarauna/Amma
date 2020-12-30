import { SUGESTAO } from "./../Helpers/Const/ActionType";
import loadingAction from "./LoadingAction";
import sugestaoService from "./../Services/SugestaoService";
import mensagem from "./../Helpers/Const/Mensagem";
import { AlertaModal, mensagemFlash } from "./../Helpers/FuncaoPadrao/Index";
import { STATUS_PENDENTE } from "./../Helpers/Const/appConst";

const salvarNovaSugestao = (sugestao) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .salvarNovaSugestao(sugestao)
    .then((response) => {
      if (response?.data) {
        mensagemFlash("success", mensagem.SUGESTAO_ENVIADA, null, null);
      } else {
        mensagemFlash("error", mensagem.SUGESTAO_ENVIADA_ERRO, null, null);
      }
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.SUGESTAO_ENVIADA_ERRO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoPendente = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarGraficoPendente()
    .then((response) => {
      dispatch({
        type: SUGESTAO.GRAFICO_PENDENTE,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.GRAFICO_PENDENTE_ERRO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoCategorias = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarGraficoCategorias()
    .then((response) => {
      dispatch({
        type: SUGESTAO.GRAFICO_CATEGORIA,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.GRAFICO_CATEGORIA_ERRO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoSolucionados = () => (dispatch) => {
  dispatch({
    type: SUGESTAO.GRAFICO_AGUARDANDO,
    payload: [],
  });
};

const buscarGraficoTopSugestoes = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarGraficoTopSugestoes()
    .then((response) => {
      dispatch({
        type: SUGESTAO.GRAFICO_TOP_FAVORITOS,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.GRAFICO_TOP_SUGESTAO_ERRO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarTodasSugestoes = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarTodasSugestoes()
    .then((response) => {
      dispatch({
        type: SUGESTAO.NOVAS_SUGESTAO,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.SUGESTAO_BUSCAR_ERRO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarTodasSugestoesPendentes = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarTodasSugestoesPendentes(STATUS_PENDENTE)
    .then((response) => {
      dispatch({
        type: SUGESTAO.PENDENTES,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.SUGESTAO_BUSCAR_ERRO)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const aprovarSugestao = (ticket) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .aprovarSugestao(ticket)
    .then((response) => {
      if (response?.data) {
        dispatch(buscarTodasSugestoesPendentes());
        mensagemFlash("success", mensagem.SUGESTAO_APROVADA, null, null);
      } else {
        mensagemFlash("error", mensagem.SUGESTAO_APROVADA_ERRO, null, null);
      }
    })
    .catch((erro) => AlertaModal("error", erro, null, mensagem.SUGESTAO_APROVADA_ERRO))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const apagarSugestao = (idSugestao) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .apagarSugestao(idSugestao)
    .then((response) => {
      if (response?.data) {
        dispatch(buscarTodasSugestoesPendentes());
        mensagemFlash("success", mensagem.APAGAR_SUGESTAO, null, null);
      } else {
        mensagemFlash("error", mensagem.APAGAR_SUGESTAO_ERRO, null, null);
      }
    })
    .catch((erro) => AlertaModal("error", erro, null, mensagem.APAGAR_SUGESTAO_ERRO))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  salvarNovaSugestao,
  buscarGraficoPendente,
  buscarGraficoCategorias,
  buscarGraficoSolucionados,
  buscarGraficoTopSugestoes,
  buscarTodasSugestoes,
  buscarTodasSugestoesPendentes,
  aprovarSugestao,
  apagarSugestao,
};
