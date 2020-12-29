import { TICKET, GERENCIAR } from "./../Helpers/Const/ActionType";
import { AlertaModal, mensagemFlash } from "./../Helpers/FuncaoPadrao/Index";
import loadingAction from "./LoadingAction";
import ticketService from "./../Services/TicketService";

const buscarTiposTicket = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarTiposTicket()
    .then((response) => {
      dispatch({
        type: TICKET.TIPO_TICKET,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, "Erro em buscar os tipos de tickets")
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const salvarNovoTicket = (sugestao) => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .salvarNovoTicket(sugestao)
    .then((response) => {
      if (response) {
        mensagemFlash("success", "Sugestão enviada com sucesso!", null, null);
      } else {
        mensagemFlash("error", "Erro ao salvar sugestão", null, null);
      }
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, "Erro em buscar os tipos de tickets")
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoPendente = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarGraficoPendente()
    .then((response) => {
      dispatch({
        type: TICKET.TICKET_GRAFICO_PENDENTE,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal(
        "error",
        erro,
        null,
        "Erro em buscar dados dos grágicos pendente"
      )
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoCategorias = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarGraficoCategorias()
    .then((response) => {
      dispatch({
        type: TICKET.TICKET_GRAFICO_CATEGORIA,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal(
        "error",
        erro,
        null,
        "Erro em buscar dados dos grágicos de categorias"
      )
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoSolucionados = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarGraficoSolucionados()
    .then((response) => {
      dispatch({
        type: TICKET.TICKET_GRAFICO_SOLUCIONADO,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal(
        "error",
        erro,
        null,
        "Erro em buscar dados dos grágicos solucionados"
      )
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarGraficoTopTicket = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarGraficoTopTicket()
    .then((response) => {
      dispatch({
        type: TICKET.TICKET_GRAFICO_TOP_FAVORITOS,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal(
        "error",
        erro,
        null,
        "Erro em buscar dados dos grágicos top ticket"
      )
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarTickets = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarNovosTickets()
    .then((response) => {
      dispatch({
        type: TICKET.NOVOS_TICKETS,
        payload: response.data,
      });
    })
    .catch((erro) => AlertaModal("error", erro, null, "Erro em buscar tickets"))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const buscarTodosTicketsPendentes = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarTodosTicketsPendentes()
    .then((response) => {
      dispatch({
        type: GERENCIAR.TODOS_TICKETS,
        payload: response.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, "Erro ao buscar todos os tickets")
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

const aprovarTicket = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .aprovarTicket()
    .then((response) => {
      mensagemFlash("success", "Ticket aprovado!", null, null);
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, "Erro ao buscar todos os tickets")
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  buscarTiposTicket,
  salvarNovoTicket,
  buscarGraficoPendente,
  buscarGraficoCategorias,
  buscarGraficoSolucionados,
  buscarGraficoTopTicket,
  buscarTickets,
  buscarTodosTicketsPendentes,
  aprovarTicket,
};
