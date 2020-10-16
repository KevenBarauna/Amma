
import { GERENCIAR } from './../Helpers/Const/ActionType';
import { exibirMensagemErro } from './../Helpers/FuncaoPadrao/Index';
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
        .catch(erro => exibirMensagemErro(erro))
        .finally(() => dispatch(loadingAction.fecharLoading()))
}

export default {
    buscarTodosTickets,
}