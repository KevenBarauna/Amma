import { SUGESTAO } from "./../Helpers/Const/ActionType";
import loadingAction from "./LoadingAction";
import sugestaoService from "./../Services/SugestaoService";
import mensagem from "./../Helpers/Const/Mensagem";
import { exibirMensagemSucesso, exibirMensagemErro } from "./../Helpers/FuncaoPadrao/Index";

const buscarTodasSugestoes = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarTodasSugestoes()
    .then((response) => {
      dispatch({
        type: SUGESTAO.TODAS_SUGESTOES,
        payload: response?.data,
      });
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const salvarNovaSugestao = (sugestao) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .salvarNovaSugestao(sugestao)
    .then((response) => {
      exibirMensagemSucesso(`${mensagem.SUGESTAO_ENVIADA} - ${response?.data}`);
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const editarSugestao = (sugestao) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .editarSugestao(sugestao)
    .then((response) => {
      dispatch(buscarTodasSugestoes());
      exibirMensagemSucesso(`${response?.data}`);
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const apagarSugestao = (idSugestao) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .apagarSugestao(idSugestao)
    .then((response) => {
      dispatch(buscarTodasSugestoes());
      exibirMensagemSucesso(`${response?.data}`);
    })
    .catch((erro) => exibirMensagemErro(erro))
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
    .catch((erro) => exibirMensagemErro(erro))
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
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoStatus = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarGraficoStatus()
    .then((response) => {
      dispatch({
        type: SUGESTAO.GRAFICO_STATUS,
        payload: response?.data,
      });
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoBarras = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  sugestaoService
    .buscarGraficoBarras()
    .then((response) => {
      dispatch({
        type: SUGESTAO.GRAFICO_BARRAS,
        payload: response?.data,
      });
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};



export default {
  salvarNovaSugestao,
  buscarGraficoPendente,
  buscarGraficoCategorias,
  buscarTodasSugestoes,
  apagarSugestao,
  editarSugestao,
  buscarGraficoBarras,
  buscarGraficoStatus,
};
