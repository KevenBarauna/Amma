import { STATUS } from "./../Helpers/Const/ActionType";
import loadingAction from "./LoadingAction";
import statusService from "./../Services/StatusService";
import { exibirMensagemErro } from "./../Helpers/FuncaoPadrao/Index";

const buscarStatus = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  statusService
    .buscarStatus()
    .then((response) => {
      dispatch({
        type: STATUS.TODOS_STATUS,
        payload: response?.data,
      });
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  buscarStatus,
};
