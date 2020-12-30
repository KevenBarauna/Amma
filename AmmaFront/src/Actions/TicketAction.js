import { TICKET } from "./../Helpers/Const/ActionType";
import loadingAction from "./LoadingAction";
import ticketService from "./../Services/TicketService";
import mensagem from "./../Helpers/Const/Mensagem";
import { AlertaModal } from "./../Helpers/FuncaoPadrao/Index";

const buscarTiposTicket = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  ticketService
    .buscarTiposTicket()
    .then((response) => {
      dispatch({
        type: TICKET.TIPO_TICKET,
        payload: response?.data,
      });
    })
    .catch((erro) =>
      AlertaModal("error", erro, null, mensagem.ERRO_BUSCAR_TIPO_TICKET)
    )
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  buscarTiposTicket,
};
