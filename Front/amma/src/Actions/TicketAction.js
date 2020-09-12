
import { TICKET } from './../Helpers/Const/ActionType';
import { exibirMensagemErro } from './../Helpers/FuncaoPadrao/Index';
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
        .catch(erro => exibirMensagemErro(erro))
        .finally(dispatch(loadingAction.fecharLoading()))
}



export default {
    buscarTiposTicket,
}