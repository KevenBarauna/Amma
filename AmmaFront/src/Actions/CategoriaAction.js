import { CATEGORIA } from "./../Helpers/Const/ActionType";
import loadingAction from "./LoadingAction";
import categoriaService from "./../Services/categoriaService";
import { exibirMensagemErro } from "./../Helpers/FuncaoPadrao/Index";

const buscarCategorias = () => (dispatch) => {
  dispatch(loadingAction.exibirLoading());
  categoriaService
    .buscarCategorias()
    .then((response) => {
      dispatch({
        type: CATEGORIA.TODAS_CATEGORIA,
        payload: response?.data,
      });
    })
    .catch((erro) => exibirMensagemErro(erro))
    .finally(() => dispatch(loadingAction.fecharLoading()));
};

export default {
  buscarCategorias,
};
