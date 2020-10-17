
import { GERENCIAR } from './../Helpers/Const/ActionType';
import { AlertaModal,mensagemFlash } from './../Helpers/FuncaoPadrao/Index';
import loadingAction from './LoadingAction';
import gerenciarService from './../Services/GerenciarService';

const buscarTodosTicketsPendentes = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    gerenciarService.buscarTodosTicketsPendentes()
        .then(response => {
            dispatch({
                type: GERENCIAR.TODOS_TICKETS,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro ao buscar todos os tickets'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

const aprovarTicket = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    gerenciarService.aprovarTicket()
        .then(response => {
            mensagemFlash('success', 'Ticket aprovado!', null,null)
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro ao buscar todos os tickets'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

export default {
    buscarTodosTicketsPendentes,
    aprovarTicket,
}