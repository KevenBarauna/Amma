
import { TICKET } from './../Helpers/Const/ActionType';
import { AlertaModal } from './../Helpers/FuncaoPadrao/Index';
import loadingAction from './LoadingAction';
import ticketService from './../Services/TicketService';

const buscarTiposTicket = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    ticketService.buscarTiposTicket()
        .then(response => {
            dispatch({
                type: TICKET.TIPO_TICKET,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro em buscar os tipos de tickets'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

const buscarGraficoPendente = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    ticketService.buscarGraficoPendente()
        .then(response => {
            dispatch({
                type: TICKET.TICKET_GRAFICO_PENDENTE,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro em buscar dados dos grágicos pendente'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

const buscarGraficoCategorias = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    ticketService.buscarGraficoCategorias()
        .then(response => {
            dispatch({
                type: TICKET.TICKET_GRAFICO_CATEGORIA,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro em buscar dados dos grágicos de categorias'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

const buscarGraficoSolucionados = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    ticketService.buscarGraficoSolucionados()
        .then(response => {
            dispatch({
                type: TICKET.TICKET_GRAFICO_SOLUCIONADO,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro em buscar dados dos grágicos solucionados'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

const buscarGraficoTopTicket = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    ticketService.buscarGraficoTopTicket()
        .then(response => {
            dispatch({
                type: TICKET.TICKET_GRAFICO_TOP_FAVORITOS,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro em buscar dados dos grágicos top ticket'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

const buscarNovosTickets = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    ticketService.buscarNovosTickets()
        .then(response => {
            dispatch({
                type: TICKET.NOVOS_TICKETS,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro em buscar tickets'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}


export default {
    buscarTiposTicket,
    buscarGraficoPendente,
    buscarGraficoCategorias,
    buscarGraficoSolucionados,
    buscarGraficoTopTicket,
    buscarNovosTickets,
}