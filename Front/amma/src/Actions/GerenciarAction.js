
import { GERENCIAR } from './../Helpers/Const/ActionType';
import { AlertaModal } from './../Helpers/FuncaoPadrao/Index';
import loadingAction from './LoadingAction';
import gerenciarService from './../Services/GerenciarService';

const buscarTodosTickets = () => dispatch => {
    dispatch(loadingAction.exibirLoading())
    gerenciarService.buscarTodosTickets()
        .then(response => {
            dispatch({
                type: GERENCIAR.TODOS_TICKETS,
                payload: response.data
            });
        })
        .catch(erro => AlertaModal('error', erro, null,'Erro ao buscar todos os tickets'))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

export default {
    buscarTodosTickets,
}